import { NextApiRequest, NextApiResponse } from 'next'

// WIP
function buildFlowerBed() {
  return `
πΈπΈπΈπ±π±π±π±π±
πΈπΈπΈπ±π±π±π±π±
πΈπΈπΈπ±π«π«π«π«
π±π±π±π±π«π±πΈπΈ
π«π«π«π«π«π±πΈπΈ
π±π±π±π±π±π±π±π±
`
}

async function flowerBot(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ tweet: buildFlowerBed() })
}

export default flowerBot
