import {createGetInitialProps} from '@mantine/next'
import Document, {Head, Html, Main, NextScript} from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang="ru">
        <Head/>
        <body>
          {/* Facebook Pixel (noscript — для браузерів без JS) */}
          <noscript>
            <img
              height="1" width="1"
              style={{display: 'none'}}
              src="https://www.facebook.com/tr?id=1544741357044788&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>

          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
