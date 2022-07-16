import { SWRConfig } from 'swr'
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/App.css'
import '../styles/page.css'
import '../styles/header.css'
import '../styles/news-page.css'
import '../lib/i18n'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { useTranslation } from 'react-i18next'

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation()
  if (process.browser) {
    document.dir = i18n.dir()
  }
  return (
    <SWRConfig
      value={{
        fetcher: (r) =>
          fetch(`https://syria-exchange.com/panel/v1/api${r}`).then((res) =>
            res.json()
          ),
      }}
    >
      <SSRProvider>
        <DefaultSeo
          {...SEO}
          additionalMetaTags={[
            {
              name: 'facebook-domain-verification',
              content: 'iytkd3zpbcf8sc22whobbk2tze4v6v',
            },
            {
              property: 'fb:pages',
              content: '101489811660272',
            },
          ]}
          additionalLinkTags={[
            {
              rel: 'icon',
              type: 'image/svg+xml',
              href: '/logo.svg',
            },
            {
              rel: 'icon',
              type: 'image/png',
              href: '/favicon-32x32.png',
              sizes: '32x32',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/favicon-16x16.png',
            },
            {
              rel: 'stylesheet',
              href: '/assets/bootstrap/css/bootstrap.min.css',
            },
            {
              rel: 'manifest',
              href: '/manifest.json',
            },
          ]}
        />
        <Component {...pageProps} />
      </SSRProvider>
    </SWRConfig>
  )
}

export default MyApp
