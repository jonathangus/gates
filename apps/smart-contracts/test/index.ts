import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Gates } from 'web3-config';

describe('Gates', function () {
  let gates: Gates;

  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const GatesContract = await ethers.getContractFactory('Gates');
    gates = (await GatesContract.deploy()) as Gates;
    await gates.deployed();
  });

  describe('conditions', async () => {
    it('compile', () => {
      const items = [
        'api:api.get:{"endpoint":"http://localhost:3000/","selector":"data.model.name","result":"vitaltik"}',
        'twitter:twitter.follow:{"account":"0xjont"}',
      ];

      const bytes = ethers.utils.toUtf8Bytes(JSON.stringify(items));

      expect(JSON.stringify(items)).to.eq(ethers.utils.toUtf8String(bytes));
    });
    it('should create conditions', async () => {
      const items = JSON.stringify([
        'api:api.get:{"endpoint":"http://localhost:3000/","selector":"data.model.name","result":"vitaltik"}',
        'twitter:twitter.follow:{"account":"0xjont"}',
      ]);
      const data = ethers.utils.toUtf8Bytes(items);

      await gates.add(data);

      const condition = await gates.conditions(0);

      expect(ethers.utils.toUtf8String(condition.toString())).to.eq(items);
    });
  });
});
