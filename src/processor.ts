import { TypeormDatabase, Store } from '@subsquid/typeorm-store';
import { EvmBatchProcessor, BatchProcessorItem, BatchHandlerContext } from '@subsquid/evm-processor';
import { lookupArchive } from '@subsquid/archive-registry';

import { Owner, Token, Transfer } from './model';

import * as nouns from './abi/nouns';
import { BigNumber } from 'ethers';

const NOUNS_ADDRESS = '0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03';
const EXHIBIT_BASE_ADDRESS = '0x9c8ff314c9bc7f6e59a9d9225fb20946427edc03';

type Item = BatchProcessorItem<typeof processor>;
type Context = BatchHandlerContext<Store, Item>;

interface RawTransfer {
  id: string;
  tokenId: number;
  from: string;
  to: string;
  timestamp: Date;
  blockNumber: number;
  txHash: string;
}

const processor = new EvmBatchProcessor()
  .setDataSource({
    // uncomment and set RPC_ENDPOONT to enable contract state queries.
    // Both https and wss endpoints are supported.
    // chain: process.env.RPC_ENDPOINT,

    // Change the Archive endpoints for run the squid
    // against the other EVM networks
    // For a full list of supported networks and config options
    // see https://docs.subsquid.io/develop-a-squid/evm-processor/configuration/

    archive: lookupArchive('eth-mainnet'),
    chain: 'https://rpc.ankr.com/eth',
  })
  .setBlockRange({
    from: 12_985_438,
  })
  .addLog(NOUNS_ADDRESS, {
    filter: [[nouns.events.Transfer.topic]],
    data: {
      evmLog: {
        topics: true,
        data: true,
      },
      transaction: {
        hash: true,
      },
    },
  })
  .addLog(EXHIBIT_BASE_ADDRESS, {
    filter: [[nouns.events.Transfer.topic]],
    data: {
      evmLog: {
        topics: true,
        data: true,
      },
      transaction: {
        hash: true,
      },
    },
  });

function formatID(height: any, hash: string) {
  return `${String(height).padStart(10, '0')}-${hash}`;
}

// processor.run(new TypeormDatabase(), async (ctx) => {
//   const burns: Burn[] = []
//   for (let c of ctx.blocks) {
//     for (let i of c.items) {
//       assert(i.kind == 'transaction')
//       // decode and normalize the tx data
//       burns.push(new Burn({
//         id: formatID(c.header.height, i.transaction.hash),
//         block: c.header.height,
//         address: i.transaction.from,
//         value: i.transaction.value,
//         txHash: i.transaction.hash
//       }))
//     }
//    }
//    // apply vectorized transformations and aggregations
//    const burned = burns.reduce((acc, b) => acc + b.value, 0n)/1_000_000_000n
//    const startBlock = ctx.blocks.at(0)?.header.height
//    const endBlock = ctx.blocks.at(-1)?.header.height
//    ctx.log.info(`Burned ${burned} Gwei from ${startBlock} to ${endBlock}`)

//    // upsert batches of entities with batch-optimized ctx.store.save
//    await ctx.store.save(burns)
// });

processor.run(new TypeormDatabase(), async (ctx) => {
  let rawTransfers: RawTransfer[] = getRawTransfers(ctx);

  let owners: Map<string, Owner> = createOwners(rawTransfers);
  let tokens: Map<string, Token> = createTokens(rawTransfers, owners);
  let transfers: Transfer[] = createTransfers(rawTransfers, owners, tokens);

  let lastBatchedBlockHeader = ctx.blocks[ctx.blocks.length - 1].header;
  let contract = new nouns.Contract(ctx, lastBatchedBlockHeader, NOUNS_ADDRESS);
  // for (let t of tokens.values()) {
  //   const uri = await contract.tokenURI(BigNumber.from(t.tokenId));
  //   ctx.log.info(`Token ${t.tokenId} has metadata: ${uri}`);
  // }

  await ctx.store.upsert([...owners.values()]);
  await ctx.store.upsert([...tokens.values()]);
  await ctx.store.insert(transfers);
});

function getRawTransfers(ctx: Context): RawTransfer[] {
  let transfers: RawTransfer[] = [];

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.kind !== 'evmLog') continue;
      let { from, to, tokenId } = nouns.events.Transfer.decode(item.evmLog);
      transfers.push({
        id: item.evmLog.id,
        tokenId: tokenId.toNumber(),
        from,
        to,
        timestamp: new Date(block.header.timestamp),
        blockNumber: block.header.height,
        txHash: item.transaction.hash,
      });
    }
  }

  return transfers;
}

function createOwners(rawTransfers: RawTransfer[]): Map<string, Owner> {
  let owners: Map<string, Owner> = new Map();
  for (let t of rawTransfers) {
    owners.set(t.from, new Owner({ id: t.from }));
    owners.set(t.to, new Owner({ id: t.to }));
  }
  return owners;
}

function createTokens(rawTransfers: RawTransfer[], owners: Map<string, Owner>): Map<string, Token> {
  let tokens: Map<string, Token> = new Map();
  for (let t of rawTransfers) {
    let tokenIdString = `${t.tokenId}`;
    tokens.set(
      tokenIdString,
      new Token({
        id: tokenIdString,
        tokenId: t.tokenId,
        owner: owners.get(t.to),
      })
    );
  }
  return tokens;
}

function createTransfers(
  rawTransfers: RawTransfer[],
  owners: Map<string, Owner>,
  tokens: Map<string, Token>
): Transfer[] {
  return rawTransfers.map(
    (t) =>
      new Transfer({
        id: t.id,
        token: tokens.get(`${t.tokenId}`),
        from: owners.get(t.from),
        to: owners.get(t.to),
        timestamp: t.timestamp,
        blockNumber: t.blockNumber,
        txHash: t.txHash,
      })
  );
}
