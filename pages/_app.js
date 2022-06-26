import { SWRConfig } from 'swr'
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/App.css'
import '../styles/page.css'
import '../styles/header.css'
import '../styles/news-page.css'
// import '../fonts/AlQabas-Regular.ttf'
// import '../fonts/29LT-Bukra.ttf'
import '../lib/i18n'
import SSRProvider from 'react-bootstrap/SSRProvider'

function MyApp({ Component, pageProps }) {
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
        <Component {...pageProps} />
      </SSRProvider>
    </SWRConfig>
  )
}

export default MyApp
