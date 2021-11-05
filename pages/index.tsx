import React from 'react'
import Head from 'next/head'

export default function Home() {
  React.useEffect(() => {
    const s = document.createElement('script')
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    s.setAttribute('async', 'true')
    document.head.appendChild(s)
  }, [])

  return (
    <div className="bg-gray-800 text-gray-200 flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <Head>
        <title>Happy Little Bots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl text-center font-bold mb-12">
          Happy Little Bots
        </h1>
        <h2 className="text-xl text-center mb-4">
          Rude Literature (
          <a className="text-blue-300" href="/api/bots/rudeliterature">
            API
          </a>
          )
        </h2>
        <div className="mb-12">
          <a
            className="twitter-timeline"
            data-width="300"
            data-height="500"
            data-dnt="true"
            data-theme="dark"
            href="https://twitter.com/RudeLiterature"
          >
            Tweets by RudeLiterature
          </a>
        </div>
        <h2 className="text-xl text-center mb-4">
          Nihilism in Space (
          <a className="text-blue-300" href="/api/bots/spacenihilism">
            API
          </a>
          )
        </h2>
        <div className="mb-12">
          <a
            className="twitter-timeline"
            data-width="300"
            data-height="500"
            data-dnt="true"
            data-theme="dark"
            href="https://twitter.com/SpaceNihilism"
          >
            Tweets by SpaceNihilism
          </a>
        </div>
      </main>
    </div>
  )
}
