import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/roboto-bold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/roboto-regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link href='/static/favicons/site.webmanifest' rel='manifest' />
        <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
        <link
          href='/static/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/static/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link
          href='/static/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
