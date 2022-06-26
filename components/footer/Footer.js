import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import ListItemSocial from '../../components/ListItemSocial'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Nav className='footer'>
      <div className='div1'>
        <img src='/logo.svg' alt='' />
        <ul>
          <li>
            <Link href='/advertise-with-us'>
              <a>{t('description.AdvertiseWithUs')}</a>
            </Link>
          </li>
          <li>
            <Link href='/get-api'>
              <a>{t('description.GetApi')}</a>
            </Link>
          </li>
          <li>
            <Link href='/about-us'>
              <a>{t('description.AboutUs')}</a>
            </Link>
          </li>
          <li>
            <Link href='/privacy-policy'>
              <a>{t('description.PrivacyPolicy.title')}</a>
            </Link>
          </li>
          <li>
            <Link href='/user-agreement'>
              <a>{t('description.UserAgreement.title')}</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='getApp'>
        <h4>{t('description.headerDownload')}</h4>
        <div>
          <a href='https://play.google.com/store/apps/details?id=com.currencyapplication.currencyapplication&hl=ar&gl=US'>
            <img src='/google-play-badge.png' alt='' />
          </a>
          <a href='#' className='pl-1'>
            <img src='/apple-store-badge.png' alt='' />
          </a>
        </div>
      </div>
      <div className='copyrights'>
        <h5 className='color-white'>{t('description.copyRights')}</h5>
        <h6 className='color-white'>Syria exchange 2022</h6>
        <ul className='headerSocialIcons'>
          <ListItemSocial
            icon={
              <img
                src='/social-icons/messenger.png'
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
                src='/social-icons/telegram.png'
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
                src='/social-icons/facebook.png'
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
                src='/social-icons/instagram.png'
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
    </Nav>
  )
}

export default Footer
