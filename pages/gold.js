import { Container, Row, Col } from 'react-bootstrap'

import CurrencyConverter from '../components/currency-converter/CurrencyConverter'
import SyGoldPrices from '../components/gold-prices/SyGoldPrices'
import IMGFig1 from '../components/img-fig/IMGFig1'
import IMGFig2 from '../components/img-fig/IMGFig2'
import SEO from '../components/SEO'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'
/* import MostWatched from "./most-watched/MostWatched"; */

const GoldPage = () => {
  return (
    <>
      <SEO />
      <Header111 />
      <ScrollToTop />
      <Container className='mt-4' as='main'>
        <Row className='justify-content-lg-center justify-content-xl-between'>
          <Col lg={9} xl={8}>
            <SyGoldPrices />
            <CurrencyConverter />
            <IMGFig2 sectionClass='IMGFig2Toast m-t-10' />
          </Col>
          {/* <div className=" grid-col-start-2 grid-col-end-9 grid-row-start-2 mt-1 mobileMainDiv">
          <SyGoldPrices />
        </div>
        <div className=" grid-col-start-2 grid-col-end-9 grid-row-start-3 mobileMainDiv3 mobileMainDiv2">
          <CurrencyConverter />
          <IMGFig2 sectionClass="IMGFig2Toast m-t-10" />
        </div> */}
          <Col lg={6} xl={4}>
            <IMGFig1 sectionClass='figureIMG mb-5' />
          </Col>

          {/* <div className=" grid-col-start-9 grid-col-end-12 grid-row-start-3 mobileMainDiv2">
                  <MostWatched title="آخر الأخبار" />
          <IMGFig1 sectionClass="mt-5 figureIMG mb-5" />
        </div> */}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default GoldPage
