import { ethers } from 'ethers';
import { NextApiHandler } from 'next';
import { savePersonalInfo } from '../../utils/ceramic-api';
import { SiweMessage } from 'siwe';

const handler: NextApiHandler = async (req, res) => {
  const { body } = req;

  if (!body.wallet) {
    return res.status(500).send('missing wallet');
  }

  const { message, signature } = req.body;
  try {
    const siweMessage = new SiweMessage(message);
    await siweMessage.validate(signature);
  } catch {
    return res.status(500).send('invalid signature');
  }

  try {
    await savePersonalInfo(
      {
        wallet: body.wallet,
        githubId: body.githubId,
      },
      signature
    );

    return res.status(200).send('saved!');
  } catch (e) {
    return res.status(500).send(`Error: ${e.message}`);
  }
};

export default handler;
