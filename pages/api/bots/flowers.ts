import { NextApiRequest, NextApiResponse } from 'next'

async function flowerBot(_req: NextApiRequest, res: NextApiResponse) {
  // const zRes = await fetch(process.env.URL_FLOWERS, {
  //   method: 'POST',
  //   body: JSON.stringify({ tweet: '🌸🌸🌸' }),
  // })

  res.status(200).json({ tweet: '🌸🌸🌸🌸🌸🌸' })
}

export default flowerBot
