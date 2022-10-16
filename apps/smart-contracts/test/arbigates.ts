import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Arbigates } from 'web3-config';

describe('Arbimint', function () {
  let nft: Arbigates;

  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const GatesContract = await ethers.getContractFactory('Arbigates');
    nft = (await GatesContract.deploy(
      4,
      'https://',
      60 * 1000 * 1
    )) as Arbigates;
    await nft.deployed();
  });

  describe('contract', async () => {
    it('mint', async () => {
      const count = 24;
      const wallets = Array(count)
        .fill(null)
        .map(() => ethers.Wallet.createRandom());

      for (let wallet of wallets) {
        wallet = wallet.connect(ethers.provider);
        // send ETH to the new wallet so it can perform a tx
        await addr1.sendTransaction({
          to: wallet.address,
          value: ethers.utils.parseEther('1'),
        });

        await nft.connect(wallet).safeMint(wallet.address);
      }

      const balance = await nft.balanceOf(wallets[0].address);
      expect(balance.toString()).to.eq('1');

      let mintError = false;

      try {
        console.log(addrs.length);
        await nft.connect(addr1).safeMint(addr1.address);
      } catch (e) {
        console.error(e);
        mintError = true;
      }

      expect(mintError).to.eq(true);
    });

    it('one per user', async () => {
      await nft.connect(addr1).safeMint(addr1.address);
      let mintError = false;

      try {
        console.log(addrs.length);
        await nft.connect(addr1).safeMint(addr1.address);
      } catch (e) {
        console.error(e);
        mintError = true;
      }

      expect(mintError).to.eq(true);
    });

    it('buildUrl', async () => {
      const a = await nft.buildUrl(
        '0xA4B7CEe8409673624EC9B075f5A4f9b8EbAdEd49',
        4
      );
      console.log(a.toString());
    });
  });
});
