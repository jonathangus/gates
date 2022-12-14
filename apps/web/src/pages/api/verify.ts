import { ethers } from 'ethers';
import { NextApiHandler } from 'next';
import { chain } from 'wagmi';
import { Gates__factory, getAddress } from 'web3-config';
import { readPersonalData } from '../../utils/ceramic-api';
import ConditionVerifier from '../../utils/ConditionVerifier';
import { CommandContext, UserData } from '../../types';

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler: NextApiHandler = async (req, res) => {
  const { gateId, address } = req.query;
  let finalAddress: string = address as string;
  console.log('start verify');
  if (typeof gateId !== 'string') {
    return res.status(500).send('missing gateId');
  }

  if (typeof address !== 'string') {
    return res.status(500).send('missing address');
  }

  let okAddress = false;
  if (finalAddress.startsWith('0x')) {
    try {
      ethers.utils.getAddress(finalAddress as string);
      okAddress = true;
    } catch (e) {}
  }

  if (!okAddress) {
    try {
      let tmp = ethers.utils.getAddress(`0x${finalAddress}`);
      okAddress = true;
      finalAddress = tmp;
    } catch (e) {
      return res.status(500).send('invalid wallet address');
    }
  }

  console.log('FINAL ADDESSS', finalAddress);

  try {
    const provider = new ethers.providers.JsonRpcBatchProvider(
      `https://arb-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
    );

    const contract = Gates__factory.connect(
      getAddress(chain.arbitrumGoerli.id, 'Gates'),
      provider
    );
    const data = await contract.conditions(gateId);
    const conditions = JSON.parse(ethers.utils.toUtf8String(data));
    const verifier = new ConditionVerifier({
      address: finalAddress,
      conditions,
    });

    const userData = (await readPersonalData(finalAddress)) as UserData;
    const success = await verifier.verify({
      wallet: finalAddress,
      userData,
    });
    res.setHeader('Cache-Control', 'max-age=10, s-maxage=10');
    res.status(200).send({ success });
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

export default allowCors(handler);
