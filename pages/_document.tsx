import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="preload"
            href="/fonts/BagelFatOne-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/outer-sans-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/cedarville-cursive.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta name="google-site-verification" content="GL83bwDes4GKEoNh1nM55lYwcAStf1a5dxKYgpvqtbQ" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Pranansh Singh',
                jobTitle: 'Software Engineer',
                url: 'https://pranansh-singh.vercel.app',
                sameAs: [
                  'https://github.com/pranansh-s',
                  'https://x.com/pronounshu/',
                  'https://www.instagram.com/prononshu/',
                  'https://www.linkedin.com/in/pranansh-singh-9288a523b/',
                ],
                description:
                  'a full-stack developer with a strong foundation in computer science and a passion for building scalable, high-performance web applications.',
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
