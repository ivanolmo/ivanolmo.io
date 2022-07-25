import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.scss';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ivan Olmo - Full stack software developer</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='canonical' href='https://ivanolmo.io' />
        <meta name='robots' content='index, follow' />
        <meta
          name='description'
          content='Full-stack software developer | React | Next.js | Jamstack'
        />
        <meta property='og:site_name' content='Ivan Olmo' />
        <meta
          property='og:title'
          content='Ivan Olmo | Full Stack Web Developer'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='Full-stack software developer | React | Next.js | Jamstack'
        />
        <meta property='og:url' content='https://ivanolmo.io' />
        <meta
          property='og:image'
          content='https://ivanolmo.io/static/images/meta-image.webp'
        />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='800' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content='@ivanbrolmo' />
        <meta property='twitter:creator' content='@ivanbrolmo' />
        <meta
          property='twitter:description'
          content='Full-stack software developer | React | Next.js | Jamstack'
        />
        <meta
          property='twitter:title'
          content='Ivan Olmo | Full Stack Web Developer'
        />
        <meta
          property='twitter:image'
          content='https://ivanolmo.io/static/images/meta-image.webp'
        />
      </Head>
      <ThemeProvider attribute='class'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
