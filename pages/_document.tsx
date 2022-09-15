import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.png?123"
          type="image/png"
        />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* FOR IE9 below */}
        {/* [if lt IE 9]> */}
        <Script src="/assets/js/vendor/jquery-1.12.4.min.js" />
        <Script src="/assets/js/vendor/modernizr-3.7.1.min.js" />
        <Script src="/assets/js/bootstrap.min.js" />
        <Script src="/assets/js/jquery.easing.min.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}