import Toast from 'react-bootstrap/Toast'
import Figure from 'react-bootstrap/Figure'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const SyriaNews = ({ posts }) => {
  const { t } = useTranslation()

  if (!posts) {
    return 'Loaindg...'
  }

  return (
    <section className='cer'>
      <div className='section-branding syriaNewsNav'>
        <div className='heading'>
          <h2 className='title' style={{ fontSize: '18px' }}>
            {t('description.news')}
          </h2>
        </div>
        <div>
          <Link href='/news'>
            <a>
              <BsChevronDoubleLeft className='ml-1' />
              {t('description.AllNews')}
            </a>
          </Link>
        </div>
      </div>

      <div className='syriaNewsToast' style={{ rowGap: '0' }}>
        <Figure className='grid-col-span-5 mT-3 '>
          {/* state: {
                title: posts.blog_post[0].post_title,
                body: posts.blog_post[0].post_body,
                image: posts.blog_post[0].post_image,
                category: posts.blog_post[0].post_category,
              }, */}
          <Link href={`/post/${posts.blog_post[0].id}`}>
            <a>
              <h3
                className='figCaptionHome'
                style={{
                  position: 'static',
                  color: '#000',
                  marginBottom: '16px',
                }}
              >
                {posts.blog_post[0].post_title}
              </h3>

              <Figure.Image
                width='100%'
                height='70%'
                alt={posts.blog_post[0].post_image}
                src={posts.blog_post[0].post_image}
              />
            </a>
          </Link>
        </Figure>
        <div className='newsToasts mt-md-5'>
          {posts.blog_post.slice(1, 5).map((item) => (
            <Toast className='grid-col-span-3' key={item.id}>
              {/* state: {
                    title: item.post_title,
                    body: item.post_body,
                    image: item.post_image,
                    category: item.post_category,
                  }, */}
              <Link href={`/post/${item.id}`}>
                <a>
                  <Toast.Body>
                    <div className='newsToastBody'>
                      <img src={item.post_image} alt={item.post_image} />
                      <div>
                        <p
                          className='newsToastBodyPostTitleColor'
                          id='newsToastBodyPostTitleColor'
                        >
                          {item.post_title}
                        </p>
                        <p className='newsToastBodyPostBodyColor'>
                          {`${item.post_body.substring(0, 40)}...`}
                        </p>
                      </div>
                    </div>
                  </Toast.Body>
                </a>
              </Link>
            </Toast>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SyriaNews
