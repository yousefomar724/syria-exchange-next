import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'

import IMGFig1 from '../components/img-fig/IMGFig1'
import InternationalCoins from '../components/international-coins/InternationalCoins'
import MostWatched from '../components/most-watched/MostWatched'
import NewsItems from '../components/news-item/NewsItems'
import SEO from '../components/SEO'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'

const NewsPage = () => {
  // const [posts, setPosts] = useState();

  const { data: posts } = useSWR('/blog-post.php')

  const { t } = useTranslation()

  // useEffect(() => {
  //   async function getPosts() {
  //     const request = fetch(
  //       "https://syria-exchange.com/panel/v1/api/blog-post.php"
  //     );
  //     const response = await request;
  //     const parsed = await response.json();
  //     setPosts(parsed);
  //   }
  //   getPosts();
  // }, []);

  const financialPosts = posts?.blog_post.filter(
    (item) => item.post_category === 'نصائح مالية'
  )

  return (
    <>
      <SEO />
      <Header111 />
      <ScrollToTop />
      <Container className='mt-4' as='main'>
        <SEO title={t('description.headerNews')} />
        <Row className='justify-content-lg-center justify-content-xl-between'>
          <Col lg={9} xl={8}>
            <NewsItems />
          </Col>

          <Col lg={6} xl={4}>
            <MostWatched
              title={t('description.financialAdvices')}
              posts={financialPosts}
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
