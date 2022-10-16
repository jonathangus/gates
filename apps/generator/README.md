# Metadata generator

Node app to generate drop metadata and upload it to AWS. Follow these steps to generate and upload metadata.

1. Create a new folder for the drop under `/content`. Base it off of another drop folder, and edit the `base.json` file accordingly. Include appropriate image, video and ownership agreement files.
1. Add the new drop to `/packages/web3-config/collections.ts` with its dropId. Make sure the key matches the name of the folder created in `/content`.
1. Run `yarn generate` to generate all the metadata. You need an `ALCHEMY_KEY` defined in your `.env` file. This will generate metadata for each drop defined in `/packages/web3-config/collections.ts`. A single file per tokenId will be created in `/metadata`.
1. Do some sample checks of the generated files in `/metadata` to make sure everything looks correct.
1. Run `yarn upload` to upload all files in the `/metadata` folder. You need AWS access and have your `AWS_ACCESS_KEY` and `AWS_SECRET_ACCESS_KEY` defined in your `.env` file.

## Notes

Both AWS bucket name and region is defined directly in `upload.ts`.

- TEST BUCKET: `metadata.anotherblock.io`
- PRODUCTION BUCKET: `test-metadata.anotherblock.io`

Do a test upload run on the test bucket first. If everything looks well, change the BUCKET variable in `upload.ts` to the production bucket and run the script again.
