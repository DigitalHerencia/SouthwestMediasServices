import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Southwest Media Services" />
                <meta
                    property="og:site_name"
                    content="southwestmediaservices.vercel.app"
                />
                <meta
                    property="og:description"
                    content="Southwest Media Services"
                />
                <meta property="og:title" content="Southwest Media Services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Southwest Media Services" />
                <meta
                    name="twitter:description"
                    content="Southwest Media Services"
                />
            </Head>
            <body className="bg-black antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}

export default MyDocument;
