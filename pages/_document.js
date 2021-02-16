import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react';
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {process.env.NODE_ENV === 'production' && (
            <Fragment>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script data-ad-client="ca-pub-6862894074348546" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          </Fragment>
          )}
                
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}