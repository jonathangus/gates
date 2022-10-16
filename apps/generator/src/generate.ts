import fs from 'fs';
import path from 'path';
import pinataSDK from '@pinata/sdk';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
import Decimal from 'decimal.js';
import { chain } from 'wagmi';
import sharp from "sharp"

dotenv.config();

const pinata = pinataSDK(process.env.API_KEY, process.env.API_SECRET);

const metadataFolder = path.resolve(__dirname, '../metadata');
const contentFolder = path.resolve(__dirname, '../content/');

const uploadFile = (file: string, name: string): Promise<any> => {
  return new Promise((resolve) => {
    const readableStreamForFile = fs.createReadStream(file);
    const options: any = {
      pinataMetadata: {
        name,
      },
      pinataOptions: {
        cidVersion: '0',
      },
    };
    pinata.pinFileToIPFS(readableStreamForFile, options).then(resolve);
  });
};

  
const main = async () => {
  // const drops = await getDrops();
  if (!fs.existsSync(metadataFolder)) {
    fs.mkdirSync(metadataFolder);
  }
    
    for (let index = 0; index < 1; index++) {
      let tokenId = index
      const name = `Arbigates #${index}`;
      const finalDescription = `Vibing in arbitrum space`
        
const contentFolder = path.resolve(__dirname, '../content/');

const imgFile = path.resolve(contentFolder, `image(${index}).webp`)
 
    const output = path.resolve(contentFolder, `${index}.jpg`)
await sharp(imgFile)
    .extract({ left: 0, top: 0, width: 100, height: 100 })
    .toFile(output)
 

  
    //   const outfile = path.join(metadataFolder, tokenId.toString());
    //   fs.writeFileSync(outfile, JSON.stringify(body), 'utf-8');
    }
  }
};

main();
