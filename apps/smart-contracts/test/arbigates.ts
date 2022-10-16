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
    nft = (await GatesContract.deploy('https://')) as Arbigates;
    await nft.deployed();
  });

  describe('contract', async () => {
    it('mint', async () => {
      console.log(addrs.length);
      // await nft.safeMint(user)
    });
  });
});
