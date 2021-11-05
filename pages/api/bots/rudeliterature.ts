import { NextApiRequest, NextApiResponse } from 'next'
import quotes from '../../../data/rudeliterature.json'

async function rudeLiteratureBot(_req: NextApiRequest, res: NextApiResponse) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  res.status(200).json(quote)
}

export default rudeLiteratureBot
