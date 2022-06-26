import backgroundImage from '../assets/about-us.jpg'
import { useTranslation } from 'react-i18next'
import ListItemSocial from '../components/ListItemSocial'
import SEO from '../components/SEO'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'

const AboutUsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO />
      <Header111 />
      <ScrollToTop />
      <div className='mainPage'>
        <div className='grid-col-span-12 backgroundImage'>
          <img src={backgroundImage} alt='' />
        </div>

        <div className='grid-col-span-12 grid-row-start-2 container mt-5'>
          <p className='mt-2 mx-auto width-80'>
            {t('description.AboutUsPara1')}
          </p>
          <p className='m-t-4 mx-auto width-80'>
            {t('description.AboutUsPara2')}
          </p>
          <p className='m-t-4 mx-auto width-80'>
            {t('description.AboutUsPara3')}
          </p>
          <p className='m-t-4 mx-auto width-80'>
            {t('description.AboutUsPara4')}
          </p>
          <p className='m-t-4 mx-auto width-80'>
            {t('description.AboutUsPara5')}
          </p>
          <div className='singlePageFooter mt-5'>
            <p>{t('description.contactUs')}</p>
            <a
              href='mailto:info@SyriaExchange.com'
              className='email'
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              info@SyriaExchange.com
            </a>
            <p className='mt-3'>{t('description.contactUsOr')}</p>
            <div className='socialIcons mt-2'>
              <ul className='headerSocialIcons'>
                <ListItemSocial
                  icon={
                    <img
                      src={require('../assets/social-icons/messenger.png')}
                      style={{ width: '90%' }}
                      alt='messenger'
                    />
                  }
                  iconStatus={true}
                  liClass='liIcon'
                  linkSocial='https://m.me/Syriaexchange '
                />
                <ListItemSocial
                  icon={
                    <img
                      src={require('../assets/social-icons/telegram.png')}
                      style={{ width: '90%' }}
                      alt='telegram'
                    />
                  }
                  iconStatus={true}
                  liClass='liIcon'
                  linkSocial='https://t.me/Syriaexchange'
                />
                <ListItemSocial
                  icon={
                    <img
                      src={require('../assets/social-icons/facebook.png')}
                      style={{ width: '90%' }}
                      alt='facebook'
                    />
                  }
                  iconStatus={true}
                  liClass='liIcon'
                  linkSocial='https://www.facebook.com/Syria.exchange '
                />
                <ListItemSocial
                  icon={
                    <img
                      src={require('../assets/social-icons/instagram.png')}
                      style={{ width: '90%' }}
                      alt='instagram'
                    />
                  }
                  iconStatus={true}
                  liClass='liIcon'
                  linkSocial='https://www.instagram.com/syria.exchange/'
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUsPage
