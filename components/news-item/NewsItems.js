import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { Button, Card, DropdownButton, Dropdown } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
/* import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";
import RefreshIcon from "../RefreshIcon"; */
import Link from 'next/link'
/* import sysUpdate from "../../assets/system-update.png"; */
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
  /* const [date, setDate] = useState(
    format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
      locale: i18n.dir() === "ltr" ? enUS : ar,
    })
  );
 */
  const { data: posts } = useSWR('/blog-post.php')

  // const [posts, setPosts] = useState();
  const [postsToShow, setPostsToShow] = useState()

  const [dropdownTitle, SetDropdownTitle] = useState({
    title: t('description.chooseCategory'),
  })

  useEffect(() => {
    // async function getPosts() {
    //   const request = fetch(
    //     "https://syria-exchange.com/panel/v1/api/blog-post.php"
    //   );
    //   const response = await request;
    //   const parsed = await response.json();
    //   setPosts(parsed.blog_post);
    //   setPostsToShow(parsed.blog_post);
    // }
    // getPosts();

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

  // if (posts === undefined) {
  //   return null;
  // }
  // if (postsToShow === undefined) {
  //   return null;
  // }

  /* const refreshDate = (e) => {
    e.preventDefault();
    setDate(
      format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
        locale: i18n.dir() === "ltr" ? enUS : ar,
      })
    );
  }; */
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
      {/* <nav className="cerNav">
        <ul>
          <li>
            <img src={logo} alt="Syria Exchange" className="img" />
            {t("description.news")}
          </li>
          <li>
            <DropdownButton
              id="dropdown-basic-button"
              title={dropdownTitle.title}
            >
              {categories.map((item, index) => (
                <Dropdown.Item key={index}>
                  <div
                    onClick={(e) => changeValues(e.currentTarget.textContent)}
                  >
                    {item}
                  </div>
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </li>
        </ul>
      </nav> */}

      <div className='newsItemsCardsGrid'>
        <div className='cerToastFirstRow' style={{ color: '#f7991e' }}>
          .
        </div>
        {postsToShow
          ? postsToShow.map((item) => (
              <Card className='grid-col-span-4 newsPageForImg' key={item.id}>
                {/* <p className="figCaptionHome">{item.post_title}</p> */}
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
                    // state: {
                    //   id: item.id,
                    //   title: item.post_title,
                    //   body: item.post_body,
                    //   image: item.post_image,
                    //   category: item.post_category,
                    // },
                  >
                    <a>{t('description.readMore')}</a>
                  </Link>
                </Card.Body>
              </Card>
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <Card className='grid-col-span-4 newsPageForImg' key={index}>
                {/* <p className="figCaptionHome">{item.post_title}</p> */}
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
