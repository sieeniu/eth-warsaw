import { type IVerifyResponse, verifyCloudProof } from '@worldcoin/idkit';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const proof = req.body;
    const app_id = process.env.APP_ID as `app_${string}`;
    console.log(app_id)
    
    const action = process.env.ACTION_ID;
    console.log(action)

  const verifyRes = await verifyCloudProof(proof, app_id, action!);
    console.log(verifyRes);
  if (verifyRes.success) {
    res.status(200).send(verifyRes);
  } else {
    res.status(400).send(verifyRes);
  }
}