import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const title = '新潟金融リテラシー向上委員会';
  const description = '新潟金融リテラシー向上委員会です.これから新潟の皆さんと一緒に金融のリテラシーを向上していくことが、私たちの願いです.ぜひ一緒に学び続けていきましょう！どうぞ末永く宜しくお願い致します.';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package_v0.16/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package_v0.16/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package_v0.16/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_package_v0.16/site.webmanifest" />
        <link rel="mask-icon" href="/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
