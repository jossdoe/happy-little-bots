import { NextApiRequest, NextApiResponse } from 'next'

export default function helloAPI(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
}
