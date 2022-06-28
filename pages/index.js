import Head from 'next/head'
import useSWR from 'swr'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import { Container, Row, Col } from 'react-bootstrap'
import HeaderCER from '../components/currency-exchange-rate/HeaderCER'
import CentralBank from '../components/central-bank/CentralBank'
import InternationalCoins from '../components/international-coins/InternationalCoins'
import CurrencyConverter from '../components/currency-converter/CurrencyConverter'
import GoldPrices from '../components/gold-prices/GoldPrices'
import IMGFig1 from '../components/img-fig/IMGFig1'
import SyriaNews from '../components/syria-news/SyriaNews'
import IMGFig2 from '../components/img-fig/IMGFig2'
import Footer from '../components/footer/Footer'
import Script from 'next/script'

export default function Home() {
  const { data: cityCoinsData } = useSWR('/city-coins.php')
  const { data: internationalCoinsData } = useSWR('/international-coins.php')
  const { data: centralBankData } = useSWR('/central-bank.php')
  const { data: internationalGoldData } = useSWR('/international-gold.php')
  const { data: posts } = useSWR('/blog-post.php')
  const { data: adsBanners } = useSWR('/ads-banner.php')
  return (
    <div>
      <Head>
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>سوريا للصرافة</title>
        <meta
          name='description'
          content='سعر صرف الليرة السورية مقابل الدولار في جميع المحافظات و اسعار الذهب في سوريا سعر صرف الليرة السورية مقابل العملات  سعر صرف الليرة التركية اسعار الذهب في تركيا الليرة اليوم قيمة الليرة السورية صرف الليرة السورية سعر الدولار صرف الدولار تحويل الى سوريا'
        />
      </Head>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-XRGSDPNWJX'
      />
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7449694416039010'
        crossOrigin='anonymous'
      />
      <Header111 />
      <ScrollToTop />
      <main>
        <Container className='mt-4' as='main'>
          <Row className='justify-content-lg-center justify-content-xl-between'>
            <Col lg={9} xl={8}>
              <HeaderCER coins={cityCoinsData} />
              <CentralBank centralBankData={centralBankData} />
              <CurrencyConverter
                sectionClass='cer mt-5'
                coins={internationalCoinsData}
              />
              <GoldPrices prices={internationalGoldData} />
              <SyriaNews posts={posts} />
              <IMGFig2 sectionClass='IMGFig2Toast ' ads={adsBanners} />
            </Col>

            <Col lg={6} xl={4}>
              <InternationalCoins
                sectionClass='InternationalCoins'
                coins={internationalCoinsData}
              />
              <IMGFig1 sectionClass='m-t-15 figureIMG' ads={adsBanners} />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
