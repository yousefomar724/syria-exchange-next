import { useTranslation } from 'react-i18next'

import backgroundImage from '../assets/user-agreement.jpg'
import SEO from '../components/SEO'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'

const UserAgreementPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO />
      <Header111 />
      <ScrollToTop />
      <div className='mainPage custom-page'>
        <div className='grid-col-span-12 position-relative backgroundImage'>
          <img src={backgroundImage} alt='' />
          <h1 className='title'>{t('description.UserAgreement.title')}</h1>
        </div>

        <div className='grid-row-start-2 grid-col-span-12 container mt-3'>
          <p className='mb-4'>{t('description.UserAgreement.introText')}</p>

          <ol className='terms'>
            <li>
              <h2>{t('description.UserAgreement.condition1.title')}</h2>
              <ul className='custom-list'>
                {t('description.UserAgreement.condition1.terms', {
                  returnObjects: true,
                }).map((term, i) => (
                  <li key={i}>{term}</li>
                ))}
              </ul>
            </li>

            <li>
              <h2>{t('description.UserAgreement.condition2.title')}</h2>
              {t('description.UserAgreement.condition2.terms', {
                returnObjects: true,
              }).map((term, i) => (
                <p key={i}>{term}</p>
              ))}
            </li>

            <li>
              <h2>{t('description.UserAgreement.condition3.title')}</h2>
              <p className='mb-2'>
                {t('description.UserAgreement.condition3.text')}
              </p>
              <ol className='list-unstyled'>
                {t('description.UserAgreement.condition3.terms', {
                  returnObjects: true,
                }).map((term, i) => (
                  <li key={i}>
                    {i + 1}. {'  '}
                    {term}
                  </li>
                ))}
              </ol>
            </li>

            <li>
              <h2>{t('description.UserAgreement.condition4.title')}</h2>
              <p>{t('description.UserAgreement.condition4.text')}</p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserAgreementPage
