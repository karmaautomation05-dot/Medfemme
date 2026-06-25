import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://www.medfemme.in" />
          <link rel="dns-prefetch" href="https://wa.me" />
        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
