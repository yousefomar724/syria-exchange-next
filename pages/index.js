import Head from 'next/head'
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

export const getStaticProps = async () => {
  const [
    cityCoinsDataRes,
    internationalCoinsDataRes,
    centralBankDataRes,
    internationalGoldDataRes,
    postsRes,
    adsBannersRes,
  ] = await Promise.all([
    fetch(`https://syria-exchange.com/panel/v1/api/city-coins.php`),
    fetch(`https://syria-exchange.com/panel/v1/api/international-coins.php`),
    fetch(`https://syria-exchange.com/panel/v1/api/central-bank.php`),
    fetch(`https://syria-exchange.com/panel/v1/api/international-gold.php`),
    fetch(`https://syria-exchange.com/panel/v1/api/blog-post.php`),
    fetch(`https://syria-exchange.com/panel/v1/api/ads-banner.php`),
  ])
  const [
    cityCoinsData,
    internationalCoinsData,
    centralBankData,
    internationalGoldData,
    posts,
    adsBanners,
  ] = await Promise.all([
    cityCoinsDataRes.json(),
    internationalCoinsDataRes.json(),
    centralBankDataRes.json(),
    internationalGoldDataRes.json(),
    postsRes.json(),
    adsBannersRes.json(),
  ])
  return {
    props: {
      cityCoinsData,
      internationalCoinsData,
      centralBankData,
      internationalGoldData,
      posts,
      adsBanners,
    },
    revalidate: 1,
  }
}

export default function Home(props) {
  const {
    cityCoinsData,
    internationalCoinsData,
    centralBankData,
    internationalGoldData,
    posts,
    adsBanners,
  } = props
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
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4833236828935969'
          crossOrigin='anonymous'
        ></script>
      </Head>
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
