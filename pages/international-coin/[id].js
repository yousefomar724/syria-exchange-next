import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import CurrencyConverter from '../../components/currency-converter/CurrencyConverter'
import IMGFig1 from '../../components/img-fig/IMGFig1'
import IMGFig2 from '../../components/img-fig/IMGFig2'
import InterCoinCER from '../../components/turkish-currency-exchange-rate/InterCoinCER'
import InterGoldPrices from '../../components/turkish-gold-prices/InterGoldPrices'
import Footer from '../../components/footer/Footer'
import Header111 from '../../components/Header111'
import ScrollToTop from '../../components/ScrollToTop'
import Head from 'next/head'

const CURRENCY_ABBRE_TO_NAME = {
  USD: ['USA Dollar', 'دولار امريكي'],
  AED: ['Emirati Dirham', 'درهم إماراتي'],
  AUD: ['Australian Dollar', 'دولاراسترالي'],
  BHD: ['Bahraini Dinar', 'دينار بحريني'],
  BRL: ['Brazilian Real', 'ريال برازيلي'],
  CAD: ['Canadian Dollar', 'دولار كندي'],
  CHF: ['Swiss Franc', 'فرنك سويسري'],
  CNY: ['Chinese Renminbi', 'يوان صيني'],
  COP: ['Colombian Pesos', 'بيزو كولومبي'],
  DJF: ['Djibouti Franc', 'فرنك جيبوتي'],
  DKK: ['Danish Krone', 'كرونة دنماركية'],
  DZD: ['Algerian Dinar', 'دينار جزائري'],
  EGP: ['Egyptian Pound', 'جنيه مصري'],
  EUR: ['Euro', 'يورو'],
  GBP: ['Pound Sterling', 'جنيه إسترليني'],
  IDR: ['Indonesian Rupiah', 'روبية إندونيسية'],
  IQD: ['Iraqi Dinar', 'دينار عراقي '],
  IRR: ['Iranian Rial', 'ريال إيراني'],
  JOD: ['Jordanian Dinar', 'دينار أردني'],
  JPY: ['Japanese Yen', 'ين ياباني'],
  KWD: ['Kuwaiti Dinar', 'دينار كويتي'],
  LBP: ['Lebanese Pound', 'ليرة لبنانية'],
  LYD: ['Libyan Dinar', 'دينار ليبي'],
  MAD: ['Moroccon Dirham', 'درهم مغربي'],
  MRU: ['Mauritanian Ouguiya', 'أوقية موريتانية'],
  MYR: ['Malaysian Ringgit', 'رينغيت ماليزي'],
  NOK: ['Norwegian Krone', 'كرونة نرويجية'],
  NZD: ['New Zealand Dollar', 'دولار نيوزيلندي'],
  OMR: ['Omani Riyal', 'ريال عماني'],
  QAR: ['Qatari Riyal', 'ريال قطري'],
  RUB: ['Russian Ruble', 'روبل روسي'],
  SAR: ['Saudi Riyal', 'ريال سعودي'],
  SDG: ['Sudanese Pound', 'جنيه سوداني'],
  SEK: ['Swedish Krona', 'كرون سويدي'],
  SGD: ['Singapore Dollar', 'دولار سنغافوري'],
  SYP: ['Syrian pound', 'ليرة سورية'],
  TND: ['Tunisian Dinar', 'دينار تونسي'],
  TRY: ['Turkish Lira', 'ليرة تركية'],
  VES: ['Venezuelan Bolivare', 'بوليفار فنزويلي'],
  XAF: ['Chad Franc', 'فرنك تشاد'],
  YER: ['Yemen Rial', 'ريال يمني'],
  ZAR: ['zuid-afrikaanse rand', 'راند أفريقي'],
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const data = await fetch(
    'https://syria-exchange.com/panel/v1/api/international-coins.php'
  )
  const internationalCoinsData = await data.json()
  const coins = internationalCoinsData?.inter_coins
    ?.filter((item) => {
      for (let [key, value] of Object.entries(item)) {
        if (key === id) return true
      }
      return false
    })
    .map((item) => {
      for (let [key, value] of Object.entries(item)) {
        return value
      }
    })?.[0]

  return {
    props: {
      coins,
      internationalCoinsData,
    },
  }
}

export const getStaticPaths = async () => {
  const data = await fetch(
    'https://syria-exchange.com/panel/v1/api/international-coins.php'
  )
  const internationalCoinsData = await data.json()

  const paths = internationalCoinsData?.inter_coins.map((coin) => ({
    params: { id: `${Object.entries(coin)[0][0]}` },
  }))

  return { paths, fallback: false }
}

const InternationalCoinPage = ({ coins, internationalCoinsData }) => {
  const { i18n } = useTranslation()

  const {
    query: { id },
  } = useRouter()

  const title = CURRENCY_ABBRE_TO_NAME[id]?.[i18n.dir() === 'rtl' ? 1 : 0]

  return (
    <>
      <NextSeo title={title} />
      <Head>
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
            <InterCoinCER
              title={title}
              items={coins}
              lastUpdated={internationalCoinsData?.last_update}
            />
            <CurrencyConverter sectionClass='cer mt-5' />
            <InterGoldPrices title={title} abbriviation={id} />
            <IMGFig2 sectionClass='IMGFig2Toast ' />
          </Col>
          <Col lg={6} xl={4}>
            <IMGFig1 sectionClass='m-t-15 figureIMG' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default InternationalCoinPage
