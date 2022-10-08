import { ethers } from 'ethers';
import { NextApiHandler } from 'next';
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
