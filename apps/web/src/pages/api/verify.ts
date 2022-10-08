import { ethers } from 'ethers';
import { NextApiHandler } from 'next';
import { chain } from 'wagmi';
import { Gates__factory, getAddress } from 'web3-config';
import ConditionVerifier from '../../utils/ConditionVerifier';

const handler: NextApiHandler = async (req, res) => {
  const { requestId, address } = req.query;

  if (typeof requestId !== 'string') {
    return res.status(500).send('missing requestId');
  }

  if (typeof address !== 'string') {
    return res.status(500).send('missing address');
  }

  try {
    ethers.utils.getAddress(address as string);
  } catch (e) {
    return res.status(500).send('invalid wallet address');
  }

  // TODO fetch conditions from requestId
  const provider = new ethers.providers.JsonRpcBatchProvider(
    `https://opt-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
  );
  const contract = Gates__factory.connect(
    getAddress(chain.optimismGoerli.id, 'Gates'),
    provider
  );
  const data = await contract.conditions(0);
  console.log({ data });
  const parsed = JSON.parse(ethers.utils.toUtf8String(data));
  console.log({ parsed });
  // TODO verify signer
  const verifier = new ConditionVerifier({ address, conditions: [] });

  try {
    const success = await verifier.verify();
    res.setHeader('Cache-Control', 'max-age=10, s-maxage=10');
    res.status(200).send({ success });
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

export default handler;
