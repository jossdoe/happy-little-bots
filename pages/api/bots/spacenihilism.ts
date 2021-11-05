import { NextApiRequest, NextApiResponse } from 'next'
import statements from '../../../data/nihilism.json'

function buildUniverse() {
  const baseArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const singleArray = ['🌍', '🪐', '🌑', '✨', '🚀', '🛰', '🛸', '☄️']
  const starsArray = ['*', '.', '°', '·']

  function buildRow(showSingles) {
    return baseArray.reduce((acc) => {
      if (Math.random() > 0.97 && showSingles) {
        const idx = Math.floor(Math.random() * singleArray.length)
        const single = singleArray[idx]
        singleArray[idx] = '   '
        return `${acc}   ${single || '   '}`
      }

      if (Math.random() > 0.9)
        return `${acc}   ${
          starsArray[Math.floor(Math.random() * starsArray.length)]
        }`

      return `${acc}   `
    }, '  ')
  }

  return `${buildRow(false)}
  ${buildRow(true)}
  ${buildRow(true)}
  ${buildRow(true)}
  ${buildRow(true)}
  ${buildRow(false)}
  ${statements[Math.floor(Math.random() * statements.length)]}`
}

async function spaceNihilismBot(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ tweet: buildUniverse() })
}

export default spaceNihilismBot
