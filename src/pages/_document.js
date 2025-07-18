// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
  <title>Qtify</title>
  <meta name="description" content="Listen to your favorite music and podcasts ad-free with Qtify." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
