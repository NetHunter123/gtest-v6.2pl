import {createGetInitialProps} from '@mantine/next'
import Document, {Head, Html, Main, NextScript} from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head lang={"ru"}/>
        <body>
        <script dangerouslySetInnerHTML={{
          __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWGT8MTL" 
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`
        }}>

        </script>
        <Main/>
        {/*<NextScript/>*/}
        </body>
      </Html>
    )
  }
}

