import { Attribute } from './model';

export interface TokenMetadata {
  image: string;
  attributes: Attribute[];
}

interface Context {
  log: {
    info: (msg: string) => void;
    warn: (msg: string) => void;
  };
}

export async function fetchTokenMetadata(ctx: Context, uri: string): Promise<TokenMetadata | undefined> {
    try {
      let dataURI: string = uri.split('base64,')[1];
      let decodedData: string = Buffer.from(dataURI, 'base64').toString('ascii');

      let metadata: any = JSON.parse(decodedData);
      let imageURI: string = metadata.image.split('base64,')[1];

    //   let svg: string = Buffer.from(imageURI, 'base64').toString('ascii');

      return {
        image: 'image',
        attributes: []
      };
  } catch (e) {
    throw new Error(`Failed to fetch metadata at ${uri}. Error: ${e}`);
  }
}
