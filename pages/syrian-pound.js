import { Container, Row, Col } from 'react-bootstrap'
import CurrencyConverter from '../components/currency-converter/CurrencyConverter'
import HeaderCERSyrianPoundPage from '../components/currency-exchange-rate/HeaderCERSyrianPoundPage'
import IMGFig1 from '../components/img-fig/IMGFig1'
import IMGFig2 from '../components/img-fig/IMGFig2'
import InternationalCoins from '../components/international-coins/InternationalCoins'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

const SryianBoundPage = ({ kinanDD }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>سوريا للصرافة | {t('description.headerSYP')}</title>
      </Head>
      <Header111 />
      <ScrollToTop />
      <Container className='mt-4' as='main'>
        <Row className='justify-content-lg-center justify-content-xl-between'>
          <Col lg={9} xl={8}>
            <HeaderCERSyrianPoundPage show={kinanDD} />
            <CurrencyConverter sectionClass='cer mt-5' />
            <IMGFig2 sectionClass='IMGFig2Toast ' />
          </Col>

          <Col lg={6} xl={4}>
            <InternationalCoins sectionClass='InternationalCoins' />
            <IMGFig1 sectionClass='mt-5 figureIMG' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default SryianBoundPage
