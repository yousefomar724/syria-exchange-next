import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { Card, DropdownButton, Dropdown } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { renderMarkup } from 'react-render-markup'

const NewsItems = () => {
  const { t, i18n } = useTranslation()
  const categories = [
    'كل الأخبار',
    'نصائح مالية',
    'أخبار محلية',
    'أخبار اقتصادية',
    'أخبار عالمية',
    'أخبار تركيا',
  ]

  const { data: posts } = useSWR('/blog-post.php')

  const [postsToShow, setPostsToShow] = useState()

  const [dropdownTitle, SetDropdownTitle] = useState({
    title: t('description.chooseCategory'),
  })

  useEffect(() => {
    setPostsToShow(posts?.blog_post)
  }, [posts])

  const changeValues = (text) => {
    SetDropdownTitle({
      title: text,
    })
    text === 'كل الأخبار'
      ? setPostsToShow(posts.blog_post)
      : setPostsToShow(
          posts.blog_post.filter((item) => item.post_category === text)
        )
  }

  return (
    <section className='cer newsItems'>
      <div className='section-branding'>
        <div className='heading'>
          <img src='/logo.svg' alt='Syria Exchange' className='logo' />
          <h1 className='title'>{t('description.news')}</h1>
        </div>

        <div>
          <DropdownButton
            id='dropdown-basic-button'
            title={dropdownTitle.title}
          >
            {categories.map((item, index) => (
              <Dropdown.Item key={index}>
                <div onClick={(e) => changeValues(e.currentTarget.textContent)}>
                  {item}
                </div>
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
      <div className='newsItemsCardsGrid'>
        <div className='cerToastFirstRow' style={{ color: '#f7991e' }}>
          .
        </div>
        {postsToShow
          ? postsToShow.map((item) => (
              <Card className='grid-col-span-4 newsPageForImg' key={item.id}>
                <Card.Img variant='top' src={item.post_image} />
                <Card.Body>
                  <Card.Title as='h3'>{item.post_title}</Card.Title>
                  <Card.Text>
                    {renderMarkup(`${item.post_body.substring(0, 150)}...`)}
                  </Card.Text>
                  <Link
                    href={`/post/${item.id}-${item.post_title
                      .trim()
                      .split(' ')
                      .join('-')}`}
                  >
                    <a>{t('description.readMore')}</a>
                  </Link>
                </Card.Body>
              </Card>
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <Card className='grid-col-span-4 newsPageForImg' key={index}>
                <div className='card-img-top'>
                  <Skeleton height={'100%'} />
                </div>
                <Card.Body>
                  <Card.Title as='h3'>
                    <Skeleton />
                  </Card.Title>
                  <Card.Text>
                    <Skeleton />
                  </Card.Text>
                  <Skeleton />
                </Card.Body>
              </Card>
            ))}
      </div>
    </section>
  )
}

export default NewsItems
