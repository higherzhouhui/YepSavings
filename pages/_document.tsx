import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head title='YepSavings'>
          <meta
            content='The best cross‑chain Yield Aggregator across DeFi. Buy, stake and earn optimized yield on BNB, Cronos, Polygon, Avalanche, and many more chains.'
            name='description'
          />
          <meta
            content='The best cross‑chain Yield Aggregator across DeFi. Buy, stake and earn optimized yield on BNB, Cronos, Polygon, Avalanche, and many more chains.'
            name='keywords'
          />
          <meta
            content='width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
            name='viewport'
          />
          <link href='/favicon.ico' rel='icon' />
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
