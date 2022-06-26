import backgroundImage from '../assets/getApi.jpg'
import { useTranslation } from 'react-i18next'
import ListItemSocial from '../components/ListItemSocial'
import SEO from '../components/SEO'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'

const GetApiPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO />
      <Header111 />
      <ScrollToTop />

      <div className='mainPage'>
        <div className='grid-col-span-12   backgroundImage'>
          <img src={backgroundImage} alt='' />
        </div>

        <div className='grid-row-start-2 grid-col-span-12 container mt-5'>
          <h2>{t('description.ApiService')} </h2>
          <p className='mt-2'>{t('description.ApiServiceParagraph')}</p>
          <h2 className='m-t-4'>{t('description.ApiOurService')}</h2>
          <p>{t('description.ApiOurServiceParagraph1')}</p>
          <p> {t('description.ApiOurServiceParagraph2')}</p>
          <p> {t('description.ApiOurServiceParagraph3')}</p>
          <h2 className='m-t-4'>{t('description.FeaturesOfOurServices')}</h2>
          <p className='mt-2'>
            <ul className='ads p-0'>
              <li>{t('description.FeaturesOfOurServicesParagraph1')}</li>
              <li>{t('description.FeaturesOfOurServicesParagraph2')}</li>
              <li>{t('description.FeaturesOfOurServicesParagraph3')}</li>
              <li>{t('description.FeaturesOfOurServicesParagraph4')}</li>
              <li>{t('description.FeaturesOfOurServicesParagraph5')}</li>
              <li>{t('description.FeaturesOfOurServicesParagraph6')}</li>
              <li>{t('description.FeaturesOfOurServicesParagraph7')}</li>
              <li>{t('description.FeaturesOfOurServicesParagraph8')}</li>
              <li>{t('description.FeaturesOfOurServicesParagraph9')}</li>
            </ul>
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

export default GetApiPage
