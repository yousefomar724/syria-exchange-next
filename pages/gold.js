import { Container, Row, Col } from 'react-bootstrap'
import CurrencyConverter from '../components/currency-converter/CurrencyConverter'
import SyGoldPrices from '../components/gold-prices/SyGoldPrices'
import IMGFig1 from '../components/img-fig/IMGFig1'
import IMGFig2 from '../components/img-fig/IMGFig2'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

const GoldPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>سوريا للصرافة | {t('description.headerGold')}</title>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4833236828935969'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <Header111 />
      <ScrollToTop />
      <Container className='mt-4' as='main'>
        <Row className='justify-content-lg-center justify-content-xl-between'>
          <Col lg={9} xl={8}>
            <SyGoldPrices />
            <CurrencyConverter />
            <IMGFig2 sectionClass='IMGFig2Toast m-t-10' />
          </Col>
          <Col lg={6} xl={4}>
            <IMGFig1 sectionClass='figureIMG mb-5' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default GoldPage
