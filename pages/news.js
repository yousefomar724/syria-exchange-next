import useSWR from 'swr'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import IMGFig1 from '../components/img-fig/IMGFig1'
import InternationalCoins from '../components/international-coins/InternationalCoins'
import MostWatched from '../components/most-watched/MostWatched'
import NewsItems from '../components/news-item/NewsItems'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'
import Head from 'next/head'

const NewsPage = () => {
  const { data: posts } = useSWR('/blog-post.php')

  const { t } = useTranslation()

  const financialPosts = posts?.blog_post.filter(
    (item) => item.post_category === 'نصائح مالية'
  )
  return (
    <>
      <Head>
        <title>سوريا للصرافة | {t('description.headerNews')}</title>
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
            <NewsItems />
          </Col>

          <Col lg={6} xl={4}>
            <MostWatched
              title={t('description.financialAdvices')}
              posts={financialPosts}
              sectionClass='mostWatched'
            />
            <InternationalCoins sectionClass='mt-6 InternationalCoins' />
            <IMGFig1 sectionClass='m-t-10 figureIMG' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default NewsPage
