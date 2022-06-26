import Toast from 'react-bootstrap/Toast'
import Link from 'next/link'

const MostWatched = ({ title, border, color, sectionClass, posts }) => {
  if (!posts) return null

  return (
    <>
      <section className={`mostWatched ${sectionClass}`}>
        <div
          className='InternationalCoinsNav'
          style={{ color: color, fontSize: '18px', padding: '7px 0' }}
        >
          {title}
        </div>
        <div className='InternationalCoinsToastDiv'>
          <div
            className='InternationalCoinsToastFirstRow'
            style={{ backgroundColor: border, color: border }}
          >
            .
          </div>
          {posts.slice(0, 4).map((item) => (
            <Toast className='grid-col-span-5' key={item.id}>
              <Link
                href={`/post/${item.id}`}
                // state: {
                //   title: item.post_title,
                //   body: item.post_body,
                //   image: item.post_image,
                //   category: item.post_category,
                // },
              >
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
              </Link>
            </Toast>
          ))}
        </div>
      </section>
    </>
  )
}

export default MostWatched
