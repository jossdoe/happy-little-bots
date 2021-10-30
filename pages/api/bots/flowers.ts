import { NextApiRequest, NextApiResponse } from 'next'

async function flowerBot(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ tweet: '🌸🌸🌸🌸🌸🌸' })
}

export default flowerBot
