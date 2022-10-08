import { ethers } from 'ethers';
import { NextApiHandler } from 'next';
import { chain } from 'wagmi';
import { Gates__factory, getAddress } from 'web3-config';
import { readPersonalData } from '../../utils/ceramic-api';

const handler: NextApiHandler = async (req, res) => {
  const { address } = req.query;

  if (typeof address !== 'string') {
    return res.status(500).send('missing address');
  }

  try {
    const userData = await readPersonalData(address);

    res.setHeader('Cache-Control', 'max-age=10, s-maxage=10');
    res.status(200).send({ userData });
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

export default handler;
