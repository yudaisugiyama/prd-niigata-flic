import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const title = '新潟金融リテラシー向上委員会';
  const description = '新潟金融リテラシー向上委員会です.';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`favicon.ico`} />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
