import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    DelegateChanged: new LogEvent<([delegator: string, fromDelegate: string, toDelegate: string] & {delegator: string, fromDelegate: string, toDelegate: string})>(
        abi, '0x3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f'
    ),
    DelegateVotesChanged: new LogEvent<([delegate: string, previousBalance: ethers.BigNumber, newBalance: ethers.BigNumber] & {delegate: string, previousBalance: ethers.BigNumber, newBalance: ethers.BigNumber})>(
        abi, '0xdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724'
    ),
    DescriptorLocked: new LogEvent<[]>(
        abi, '0x593e31e306c198bef259d839f7c6dc4ff7fc10c07f76fab193a210b03704105f'
    ),
    DescriptorUpdated: new LogEvent<([descriptor: string] & {descriptor: string})>(
        abi, '0x6e66ab22238a5471005895947c8f57db923c2a9c9c73180eff80864c21295c1b'
    ),
    MinterLocked: new LogEvent<[]>(
        abi, '0x192417b3f16b1ce69e0c59b0376549666650245ffc05e4b2569089dda8589b66'
    ),
    MinterUpdated: new LogEvent<([minter: string] & {minter: string})>(
        abi, '0xad0f299ec81a386c98df0ac27dae11dd020ed1b56963c53a7292e7a3a314539a'
    ),
    NounBurned: new LogEvent<([tokenId: ethers.BigNumber] & {tokenId: ethers.BigNumber})>(
        abi, '0x806be94a2ac8b92d74e99aa8add5a8e54528a01ec914a9e00d201a6480ed9863'
    ),
    NounCreated: new LogEvent<([tokenId: ethers.BigNumber, seed: ([background: number, body: number, accessory: number, head: number, glasses: number] & {background: number, body: number, accessory: number, head: number, glasses: number})] & {tokenId: ethers.BigNumber, seed: ([background: number, body: number, accessory: number, head: number, glasses: number] & {background: number, body: number, accessory: number, head: number, glasses: number})})>(
        abi, '0x1106ee9d020bfbb5ee34cf5535a5fbf024a011bd130078088cbf124ab3092478'
    ),
    NoundersDAOUpdated: new LogEvent<([noundersDAO: string] & {noundersDAO: string})>(
        abi, '0x3a0b923617f180781f3530e464cb4a8b9393e69f47607e4eb28d61cd87ce968c'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    SeederLocked: new LogEvent<[]>(
        abi, '0xf59561f22794afcfb1e6be5c4733f5449fd167252a96b74bb06d341fb0dac7ed'
    ),
    SeederUpdated: new LogEvent<([seeder: string] & {seeder: string})>(
        abi, '0xb3025222d01ce9a26c7f9d52bc3bfd0352366bd90a793c273fbfe1c81e0e288e'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    DELEGATION_TYPEHASH: new Func<[], {}, string>(
        abi, '0xe7a324dc'
    ),
    DOMAIN_TYPEHASH: new Func<[], {}, string>(
        abi, '0x20606b70'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    burn: new Func<[nounId: ethers.BigNumber], {nounId: ethers.BigNumber}, []>(
        abi, '0x42966c68'
    ),
    checkpoints: new Func<[_: string, _: number], {}, ([fromBlock: number, votes: ethers.BigNumber] & {fromBlock: number, votes: ethers.BigNumber})>(
        abi, '0xf1127ed8'
    ),
    contractURI: new Func<[], {}, string>(
        abi, '0xe8a3d485'
    ),
    dataURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x5ac1e3bb'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    delegate: new Func<[delegatee: string], {delegatee: string}, []>(
        abi, '0x5c19a95c'
    ),
    delegateBySig: new Func<[delegatee: string, nonce: ethers.BigNumber, expiry: ethers.BigNumber, v: number, r: string, s: string], {delegatee: string, nonce: ethers.BigNumber, expiry: ethers.BigNumber, v: number, r: string, s: string}, []>(
        abi, '0xc3cda520'
    ),
    delegates: new Func<[delegator: string], {delegator: string}, string>(
        abi, '0x587cde1e'
    ),
    descriptor: new Func<[], {}, string>(
        abi, '0x303e74df'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    getCurrentVotes: new Func<[account: string], {account: string}, ethers.BigNumber>(
        abi, '0xb4b5ea57'
    ),
    getPriorVotes: new Func<[account: string, blockNumber: ethers.BigNumber], {account: string, blockNumber: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x782d6fe1'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isDescriptorLocked: new Func<[], {}, boolean>(
        abi, '0xc1b8e4e1'
    ),
    isMinterLocked: new Func<[], {}, boolean>(
        abi, '0x1e688e10'
    ),
    isSeederLocked: new Func<[], {}, boolean>(
        abi, '0xc8fc0c23'
    ),
    lockDescriptor: new Func<[], {}, []>(
        abi, '0x41b5d0de'
    ),
    lockMinter: new Func<[], {}, []>(
        abi, '0x76daebe1'
    ),
    lockSeeder: new Func<[], {}, []>(
        abi, '0x5f295a67'
    ),
    mint: new Func<[], {}, ethers.BigNumber>(
        abi, '0x1249c58b'
    ),
    minter: new Func<[], {}, string>(
        abi, '0x07546172'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    nonces: new Func<[_: string], {}, ethers.BigNumber>(
        abi, '0x7ecebe00'
    ),
    noundersDAO: new Func<[], {}, string>(
        abi, '0x655932a4'
    ),
    numCheckpoints: new Func<[_: string], {}, number>(
        abi, '0x6fcfff45'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    proxyRegistry: new Func<[], {}, string>(
        abi, '0xb50cbd9f'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, _data: string], {from: string, to: string, tokenId: ethers.BigNumber, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    seeder: new Func<[], {}, string>(
        abi, '0x684931ed'
    ),
    seeds: new Func<[_: ethers.BigNumber], {}, ([background: number, body: number, accessory: number, head: number, glasses: number] & {background: number, body: number, accessory: number, head: number, glasses: number})>(
        abi, '0xf0503e80'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setContractURIHash: new Func<[newContractURIHash: string], {newContractURIHash: string}, []>(
        abi, '0xbaedc1c4'
    ),
    setDescriptor: new Func<[_descriptor: string], {_descriptor: string}, []>(
        abi, '0x01b9a397'
    ),
    setMinter: new Func<[_minter: string], {_minter: string}, []>(
        abi, '0xfca3b5aa'
    ),
    setNoundersDAO: new Func<[_noundersDAO: string], {_noundersDAO: string}, []>(
        abi, '0x058df0ab'
    ),
    setSeeder: new Func<[_seeder: string], {_seeder: string}, []>(
        abi, '0xd50b31eb'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenByIndex: new Func<[index: ethers.BigNumber], {index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x4f6ccce7'
    ),
    tokenOfOwnerByIndex: new Func<[owner: string, index: ethers.BigNumber], {owner: string, index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    votesToDelegate: new Func<[delegator: string], {delegator: string}, ethers.BigNumber>(
        abi, '0xe9580e91'
    ),
}

export class Contract extends ContractBase {

    DELEGATION_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.DELEGATION_TYPEHASH, [])
    }

    DOMAIN_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.DOMAIN_TYPEHASH, [])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    checkpoints(arg0: string, arg1: number): Promise<([fromBlock: number, votes: ethers.BigNumber] & {fromBlock: number, votes: ethers.BigNumber})> {
        return this.eth_call(functions.checkpoints, [arg0, arg1])
    }

    contractURI(): Promise<string> {
        return this.eth_call(functions.contractURI, [])
    }

    dataURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.dataURI, [tokenId])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    delegates(delegator: string): Promise<string> {
        return this.eth_call(functions.delegates, [delegator])
    }

    descriptor(): Promise<string> {
        return this.eth_call(functions.descriptor, [])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getCurrentVotes(account: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getCurrentVotes, [account])
    }

    getPriorVotes(account: string, blockNumber: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getPriorVotes, [account, blockNumber])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    isDescriptorLocked(): Promise<boolean> {
        return this.eth_call(functions.isDescriptorLocked, [])
    }

    isMinterLocked(): Promise<boolean> {
        return this.eth_call(functions.isMinterLocked, [])
    }

    isSeederLocked(): Promise<boolean> {
        return this.eth_call(functions.isSeederLocked, [])
    }

    minter(): Promise<string> {
        return this.eth_call(functions.minter, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    nonces(arg0: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nonces, [arg0])
    }

    noundersDAO(): Promise<string> {
        return this.eth_call(functions.noundersDAO, [])
    }

    numCheckpoints(arg0: string): Promise<number> {
        return this.eth_call(functions.numCheckpoints, [arg0])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    proxyRegistry(): Promise<string> {
        return this.eth_call(functions.proxyRegistry, [])
    }

    seeder(): Promise<string> {
        return this.eth_call(functions.seeder, [])
    }

    seeds(arg0: ethers.BigNumber): Promise<([background: number, body: number, accessory: number, head: number, glasses: number] & {background: number, body: number, accessory: number, head: number, glasses: number})> {
        return this.eth_call(functions.seeds, [arg0])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenByIndex(index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenByIndex, [index])
    }

    tokenOfOwnerByIndex(owner: string, index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenOfOwnerByIndex, [owner, index])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }

    votesToDelegate(delegator: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.votesToDelegate, [delegator])
    }
}
