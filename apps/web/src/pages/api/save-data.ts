import { ethers } from 'ethers';
import { NextApiHandler } from 'next';
import { savePersonalInfo } from '../../utils/ceramic-api';

const handler: NextApiHandler = async (req, res) => {
  const { body } = req;

  if (!body.wallet) {
    return res.status(500).send('missing wallet');
  }

  try {
    await savePersonalInfo(body.wallet, body.userData || {}, body.did);

    return res.status(200).send('saved!');
  } catch (e) {
    return res.status(500).send(`Error: ${e.message}`);
  }
};

export default handler;
