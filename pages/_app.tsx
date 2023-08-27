import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NGT金融リテラシー向上委員会</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp