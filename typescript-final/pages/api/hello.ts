import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello! The blog app is now powered by TypeScript.' })
}
