import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

export default class extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.9.0/css/all.css'
            integrity='sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E'
            crossOrigin='anonymous'
          />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}