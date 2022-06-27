import { useTranslation } from 'react-i18next'
import Header111 from '../components/Header111'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'
import Head from 'next/head'

const PrivacyPolicyPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>سوريا للصرافة | {t('description.PrivacyPolicy.title')}</title>
      </Head>
      <Header111 />
      <ScrollToTop />
      <div className='mainPage custom-page'>
        <div className='grid-col-span-12 position-relative backgroundImage'>
          <img src='/privacy-policy.jpg' alt='' />
          <h1 className='title'>{t('description.PrivacyPolicy.title')}</h1>
        </div>

        <div className='grid-row-start-2 grid-col-span-12 container mt-3 mb-3'>
          <p className='mb-3'>{t('description.PrivacyPolicy.introText1')}</p>

          <p className='mb-4'>{t('description.PrivacyPolicy.introText2')}</p>

          <ul className='terms mb-0 px-0' style={{ listStyle: 'none' }}>
            <li>
              <h2>{t('description.PrivacyPolicy.cookies.title')}</h2>
              <p>{t('description.PrivacyPolicy.cookies.text')}</p>
            </li>

            <li>
              <h2>{t('description.PrivacyPolicy.essentialCookies.title')}</h2>
              <p>{t('description.PrivacyPolicy.essentialCookies.text')}</p>
            </li>

            <li>
              <h2>{t('description.PrivacyPolicy.customCookies.title')}</h2>
              <p>{t('description.PrivacyPolicy.customCookies.text')}</p>
            </li>

            <li>
              <h2>{t('description.PrivacyPolicy.analyticalCookies.title')}</h2>
              <p>{t('description.PrivacyPolicy.analyticalCookies.text')}</p>
            </li>

            <li>
              <h2>{t('description.PrivacyPolicy.advertisingCookies.title')}</h2>
              <ul className='custom-list'>
                {t('description.UserAgreement.condition1.terms', {
                  returnObjects: true,
                }).map((term, i) => (
                  <li key={i}>{term}</li>
                ))}
              </ul>
            </li>
          </ul>

          <p className='mb-3'>{t('description.PrivacyPolicy.outroText1')}</p>
          <p className='mb-5'>
            {t('description.PrivacyPolicy.outroText2')}{' '}
            {t('description.PrivacyPolicy.emailContact')}{' '}
            <a
              href='mailto:info@SyriaExchange.com'
              className='email'
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              info@SyriaExchange.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicyPage
