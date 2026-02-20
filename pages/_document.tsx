import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favi.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/logo64.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preload" href="/fonts/BagelFatOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/outer-sans-regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/cedarville-cursive.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
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
                  'https://linkedin.com/in/pranansh-s',
                ],
                description: 'Software Engineer specializing in web development and system design',
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
