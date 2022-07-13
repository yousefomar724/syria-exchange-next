import Toast from 'react-bootstrap/Toast'
import Link from 'next/link'

const MostWatched = ({ title, sectionClass, posts }) => {
  if (!posts) return null

  return (
    <>
      <section className={`mostWatched ${sectionClass}`}>
        <div
          className='InternationalCoinsNav'
          style={{ fontSize: '18px', padding: '7px 0' }}
        >
          {title}
        </div>
        <div className='InternationalCoinsToastDiv'>
          <div className='InternationalCoinsToastFirstRow'>.</div>
          {posts.slice(0, 4).map((item) => (
            <Toast className='grid-col-span-5' key={item.id}>
              <Link
                href={`/post/${item.id}-${item.post_title
                  .trim()
                  .slice(0, 20)
                  .split(' ')
                  .join('-')}`}
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
