import { NextApiRequest, NextApiResponse } from 'next'

// WIP
function buildFlowerBed() {
  return `
🌸🌸🌸🌱🌱🌱🌱🌱
🌸🌸🌸🌱🌱🌱🌱🌱
🌸🌸🌸🌱🟫🟫🟫🟫
🌱🌱🌱🌱🟫🌱🌸🌸
🟫🟫🟫🟫🟫🌱🌸🌸
🌱🌱🌱🌱🌱🌱🌱🌱
`
}

async function flowerBot(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ tweet: buildFlowerBed() })
}

export default flowerBot
