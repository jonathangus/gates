import path from 'path';
import fs from 'fs';
import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from '@aws-sdk/client-s3';
import fg from 'fast-glob';
import * as dotenv from 'dotenv';
dotenv.config();

const REGION = 'eu-north-1';
const BUCKET = 'metadata.anotherblock.io';
const METADATA_DIR = path.resolve(__dirname, '../metadata');

const baseParams = {
  Bucket: BUCKET,
};

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

const main = async () => {
  const files = await fg([`${METADATA_DIR}/*`], { onlyFiles: true });

  const uploads = files.map((file) => {
    const params: PutObjectCommandInput = {
      ...baseParams,
      Key: path.basename(file),
      Body: fs.readFileSync(file),
    };
    return s3Client.send(new PutObjectCommand(params));
  });

  console.log(`Uploading ${files.length} metadata files to bucket ${BUCKET}.`);

  try {
    await Promise.all(uploads);
    console.log('Upload done!');
  } catch (error) {
    console.log('Something went wrong');
    console.error(error);
  }
};

main();
