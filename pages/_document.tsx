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
            <link rel="icon" href="/favi.ico" type='image/x-icon' />
            <link rel="apple-touch-icon" href="/logo64.png" />
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument;