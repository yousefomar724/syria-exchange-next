import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IMGFig1 from '../components/img-fig/IMGFig1'
import IMGFig3 from '../components/img-fig/IMGFig3'
import InternationalCoins from '../components/international-coins/InternationalCoins'
import MostWatched from '../components/most-watched/MostWatched'
import TurkishCER from '../components/turkish-currency-exchange-rate/TurkishCER'
import TurkishGoldPrices from '../components/turkish-gold-prices/TurkishGoldPrices'
import { useTranslation } from 'react-i18next'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'
import Head from 'next/head'

const TurkishPoundPage = () => {
  const { t } = useTranslation()

  const [posts, setPosts] = useState()

  useEffect(() => {
    async function getPosts() {
      const request = fetch(
        'https://syria-exchange.com/panel/v1/api/blog-post.php'
      )
      const response = await request
      const parsed = await response.json()
      setPosts(parsed)
    }
    getPosts()
  }, [])

  const tryPosts = posts?.blog_post
    .filter((item) => item.post_category === 'أخبار تركيا')
    .slice(0, 4)

  return (
    <>
      <Head>
        <title>سوريا للصرافة | {t('description.headerTRY')}</title>
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
            <TurkishCER
              title={t('description.TRYHeaderCERTitle')}
              border='red'
              color='white'
            />
            <TurkishGoldPrices
              title={t('description.TRYGoldTitle')}
              color='white'
              border='red'
            />
            <IMGFig3 sectionClass='IMGFig3Toast ' />
          </Col>

          <Col lg={6} xl={4}>
            <MostWatched
              title={t('description.TurkeyNews')}
              border='red'
              color='white'
              posts={tryPosts}
            />
            <InternationalCoins
              sectionClass='mt-6 InternationalCoins'
              border='red'
              color='white'
            />
            <IMGFig1 sectionClass='m-t-10 figureIMG' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default TurkishPoundPage
