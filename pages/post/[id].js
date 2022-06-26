import { NextSeo } from 'next-seo'
import { Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/footer/Footer'
import IMGFig1 from '../../components/img-fig/IMGFig1'
import InternationalCoins from '../../components/international-coins/InternationalCoins'
import MostWatched from '../../components/most-watched/MostWatched'
import ScrollToTop from '../../components/ScrollToTop'
import { useRouter } from 'next/router'
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from 'react-share'
import { Markup, renderMarkup } from 'react-render-markup'
import Skeleton from 'react-loading-skeleton'
import Header111 from '../../components/Header111'

export const getStaticProps = async (context) => {
  const { id } = context.params
  const data = await fetch(
    'https://syria-exchange.com/panel/v1/api/blog-post.php'
  )
  const allPosts = await data.json()
  const post = allPosts?.blog_post.find(
    (p) => String(p.id) === String(id.split('-')[0])
  )
  const financialPosts = allPosts?.blog_post.filter(
    (item) => item.post_category === 'نصائح مالية'
  )
  return {
    props: {
      post,
      financialPosts,
    },
  }
}

export const getStaticPaths = async () => {
  const data = await fetch(
    'https://syria-exchange.com/panel/v1/api/blog-post.php'
  )
  const allPosts = await data.json()

  const paths = allPosts?.blog_post.map((post) => ({
    params: { id: `${post.id}-${post.post_title.split(' ').join('-')}` },
  }))

  return { paths, fallback: false }
}

const SinglePostPage = ({ post, financialPosts }) => {
  const router = useRouter()
  const {
    i18n: { language },
  } = useTranslation()

  const currentURL = `https://syria-exchange-next.vercel.app${router.asPath}`

  const baseTitle = language === 'ar' ? 'سوريا للصرافة' : 'Syria Exchange'

  return (
    <>
      <NextSeo
        title={
          post.post_title.trim()
            ? `${post.post_title.trim()} | ${baseTitle}`
            : baseTitle
        }
        description={`${post.post_body.substring(3, 120)}...`}
        openGraph={{
          url: typeof window !== 'undefined' ? window.location.href : '/',
          title: post.post_title.trim()
            ? `${post.post_title.trim()} | ${baseTitle}`
            : baseTitle,
          description: `${post.post_body.substring(3, 120)}...`,
          images: [
            {
              url: post.post_image
                ? post.post_image
                : `${
                    typeof window !== 'undefined' ? window.location.href : '/'
                  }syria-exchange-share.jpg`,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpg',
            },
          ],
          site_name: 'https://syria-exchange-next.vercel.app/',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <Header111 />
      <ScrollToTop />
      <div className='mainPage container'>
        <div className=' grid-col-start-1 grid-col-end-9 grid-row-start-2 mt-1 mobileMainDiv'>
          <section className='cer newsItems'>
            <nav className='cerNav'>
              <ul>
                <li>
                  <img src='/logo.svg' alt='Syria Exchange' className='img' />
                  {post?.post_category}
                </li>
              </ul>
            </nav>
            <div className='newsItemsCardsGrid'>
              <div
                className='cerToastFirstRow singlePost '
                style={{ color: '#f7991e' }}
              >
                .
              </div>
              <Card className='grid-col-span-4 singlePost'>
                <h2>{post ? post.post_title : <Skeleton />}</h2>
                {post ? (
                  <Card.Img variant='top' src={post.post_image} />
                ) : (
                  <div className='card-img-top'>
                    <Skeleton height={220} />
                  </div>
                )}
                <Card.Body>
                  <Card.Text as='div'>
                    {/*  <div dangerouslySetInnerHTML={{ __html: post.body }}></div> */}
                    <div>
                      {post ? (
                        renderMarkup(post.post_body)
                      ) : (
                        <Skeleton count={20} />
                      )}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className='grid-col-span-4 d-flex sharePostDiv'>
                <p>شارك الخبر</p>

                <div className='sharePostIconsDiv'>
                  <FacebookMessengerShareButton
                    url={currentURL}
                    className='sharePostliIcon'
                  >
                    <img
                      src='/social-icons/messenger.png'
                      style={{ width: '70%' }}
                      alt='messenger'
                    />
                  </FacebookMessengerShareButton>

                  <TelegramShareButton
                    title={post?.post_title.trim()}
                    url={currentURL}
                    className='sharePostliIcon'
                  >
                    <img
                      src='/social-icons/telegram.png'
                      style={{ width: '70%' }}
                      alt='telegram'
                    />
                  </TelegramShareButton>

                  <WhatsappShareButton
                    title={post?.post_title.trim()}
                    url={currentURL}
                    className='sharePostliIcon'
                  >
                    <img
                      src='/social-icons/whatsapp.png'
                      style={{ width: '70%' }}
                      alt='whatsapp'
                    />
                  </WhatsappShareButton>

                  <TwitterShareButton
                    title={post?.post_title.trim()}
                    url={currentURL}
                    className='sharePostliIcon'
                  >
                    <img
                      src='/social-icons/twitter.png'
                      style={{ width: '70%' }}
                      alt='twitter'
                    />
                  </TwitterShareButton>

                  <FacebookShareButton
                    url={currentURL}
                    quote={post?.post_title.trim()}
                    className='sharePostliIcon'
                  >
                    <img
                      src='/social-icons/facebook.png'
                      style={{ width: '70%' }}
                      alt='facebook'
                    />
                  </FacebookShareButton>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className=' grid-col-start-9 grid-col-end-13 grid-row-start-2 mt-1 mobileMainDiv2'>
          <MostWatched title='نصائح مالية' posts={financialPosts} />
          <InternationalCoins sectionClass='m-t-15 InternationalCoins' />
          <IMGFig1 sectionClass='m-t-10 figureIMG' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SinglePostPage
