import { ethers } from 'ethers';
import { NextApiHandler } from 'next';
import { chain } from 'wagmi';
import { Gates__factory, getAddress } from 'web3-config';
import ConditionVerifier from '../../utils/ConditionVerifier';
import { ENDPOINTS } from '../../utils/endpoints';

const handler: NextApiHandler = async (req, res) => {
  const { gateId, address, signature } = req.query;

  if (typeof gateId !== 'string') {
    return res.status(500).send('missing gateId');
  }

  if (typeof address !== 'string') {
    return res.status(500).send('missing address');
  }

  try {
    ethers.utils.getAddress(address as string);
  } catch (e) {
    return res.status(500).send('invalid wallet address');
  }

  // TODO fetch user data from address
  // const userData = await getCeramic(address)
  // const provider = new ethers.providers.JsonRpcBatchProvider(
  //   `https://opt-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
  // );

  const provider = new ethers.providers.JsonRpcProvider({
    url: ENDPOINTS.COINBASE_GOERLI_NODE,
    user: ENDPOINTS.COINBASE_GOERLI_USERNAME,
    password: ENDPOINTS.COINBASE_GOERLI_PASSWORD,
  });

  const contract = Gates__factory.connect(
    getAddress(chain.optimismGoerli.id, 'Gates'),
    provider
  );
  const data = await contract.conditions(gateId);
  console.log(data);
  console.log(ethers.utils.toUtf8String(data));
  const conditions = JSON.parse(ethers.utils.toUtf8String(data));

  if (typeof signature === 'string') {
    const verified = await contract.verify(address, gateId, signature);

    if (!verified) {
      return res
        .status(500)
        .send(`User have not signed approval for gateId ${gateId}`);
    }
  }

  const verifier = new ConditionVerifier({ address, conditions });

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
