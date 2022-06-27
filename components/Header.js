import ListItem from './ListItem'
import ListItem2 from './ListItem2'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import Paragraph from './Paragraph'
import HeaderRefreshIcon from './HeaderRefreshIcon'
import { Dropdown, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ListItemSocial from './ListItemSocial'
import { useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'EN' },
  ar: { nativeName: 'AR' },
}
const Header = () => {
  const { t, i18n } = useTranslation()
  const [interCoins, setInterCoins] = useState()
  const [cityCoins, setCityCoins] = useState()

  const iter_curr_array = [
    ['7', 'USD', 'USA Dollar', 'دولار امريكي'],
    ['7', 'AED', 'Emirati Dirham', 'درهم إماراتي'],
    ['15', 'AUD', 'Australian Dollar', 'دولاراسترالي'],
    ['11', 'BHD', 'Bahraini Dinar', 'دينار بحريني'],
    ['26', 'BRL', 'Brazilian Real', 'ريال برازيلي'],
    ['12', 'CAD', 'Canadian Dollar', 'دولار كندي'],
    ['13', 'CHF', 'Swiss Franc', 'فرنك سويسري'],
    ['29', 'CNY', 'Chinese Renminbi', 'يوان صيني'],
    ['38', 'COP', 'Colombian Pesos', 'بيزو كولومبي'],
    ['36', 'DJF', 'Djibouti Franc', 'فرنك جيبوتي'],
    ['25', 'DKK', 'Danish Krone', 'كرونة دنماركية'],
    ['20', 'DZD', 'Algerian Dinar', 'دينار جزائري'],
    ['17', 'EGP', 'Egyptian Pound', 'جنيه مصري'],
    ['3', 'EUR', 'Euro', 'يورو'],
    ['14', 'GBP', 'Pound Sterling', 'جنيه إسترليني'],
    ['27', 'IDR', 'Indonesian Rupiah', 'روبية إندونيسية'],
    ['18', 'IQD', 'Iraqi Dinar', 'دينار عراقي '],
    ['30', 'IRR', 'Iranian Rial', 'ريال إيراني'],
    ['8', 'JOD', 'Jordanian Dinar', 'دينار أردني'],
    ['28', 'JPY', 'Japanese Yen', 'ين ياباني'],
    ['6', 'KWD', 'Kuwaiti Dinar', 'دينار كويتي'],
    ['32', 'LBP', 'Lebanese Pound', 'ليرة لبنانية'],
    ['16', 'LYD', 'Libyan Dinar', 'دينار ليبي'],
    ['19', 'MAD', 'Moroccon Dirham', 'درهم مغربي'],
    ['35', 'MRU', 'Mauritanian Ouguiya', 'أوقية موريتانية'],
    ['40', 'MYR', 'Malaysian Ringgit', 'رينغيت ماليزي'],
    ['24', 'NOK', 'Norwegian Krone', 'كرونة نرويجية'],
    ['41', 'NZD', 'New Zealand Dollar', 'دولار نيوزيلندي'],
    ['9', 'OMR', 'Omani Riyal', 'ريال عماني'],
    ['10', 'QAR', 'Qatari Riyal', 'ريال قطري'],
    ['23', 'RUB', 'Russian Ruble', 'روبل روسي'],
    ['5', 'SAR', 'Saudi Riyal', 'ريال سعودي'],
    ['33', 'SDG', 'Sudanese Pound', 'جنيه سوداني'],
    ['22', 'SEK', 'Swedish Krona', 'كرون سويدي'],
    ['39', 'SGD', 'Singapore Dollar', 'دولار سنغافوري'],
    ['2', 'SYP', 'Syrian pound', 'ليرة سورية'],
    ['21', 'TND', 'Tunisian Dinar', 'دينار تونسي'],
    ['4', 'TRY', 'Turkish Lira', 'ليرة تركية'],
    ['31', 'VES', 'Venezuelan Bolivare', 'بوليفار فنزويلي'],
    ['37', 'XAF', 'Chad Franc', 'فرنك تشاد'],
    ['34', 'YER', 'Yemen Rial', 'ريال يمني'],
    ['42', 'ZAR', 'zuid-afrikaanse rand', 'راند أفريقي'],
  ]
  useEffect(() => {
    async function getInterCoins() {
      const request = fetch(
        'https://syria-exchange.com/panel/v1/api/international-coins.php'
      )
      const response = await request
      const parsed = await response.json()
      setInterCoins(parsed)
    }
    getInterCoins()

    async function getCityCoins() {
      const request = fetch(
        'https://syria-exchange.com/panel/v1/api/city-coins.php'
      )
      const response = await request
      const parsed = await response.json()
      setCityCoins(parsed)
    }
    getCityCoins()
  }, [])
  if (interCoins === undefined) {
    return null
  }
  if (cityCoins === undefined) {
    return null
  }

  const city_curr = cityCoins.city_coins.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value]
    }
  })

  const curr1 = interCoins.inter_coins.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value]
    }
  })
  const refreshPage = (e) => {
    window.location.reload(false)
  }
  let textAlign = i18n.dir() === 'ltr' ? 'text-left pt-1' : ''
  return (
    <header id='header'>
      <div className='container d-flex header'>
        <div className='logo mr-auto'>
          <a href='index.html'>
            <img src='/logo.svg' alt='Syria Exchange' className='img' />
          </a>
          <div className='mt-2'>
            <Paragraph pText='سوريا للصرافة' />
            <Paragraph pText='Syria Exchange' />
          </div>
        </div>

        <nav className='nav-menu flexy navbar'>
          <ul>
            <ListItem anchotText={t('description.headerHome')} link='/' />
            <ListItem
              anchotText={t('description.headerSYP')}
              link='/syrian-bound'
            />
            <ListItem anchotText={t('description.headerGold')} link='/gold' />
            <ListItem
              anchotText={t('description.headerTRY')}
              link='/turkish-pound'
            />
            <li>
              <Dropdown>
                <Dropdown.Toggle id='dropdown-basic'>
                  {t('description.headerIterCoins')}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {curr1.map((item, index) => (
                    <Link href={`/international-coin/${index}`} key={index}>
                      <Dropdown.Item href='/' className={`${textAlign}`}>
                        <img
                          src={`/currIcons/${curr1[index][0]}.png`}
                          className={`p-l-05 headerCurrIcon ${textAlign}`}
                        />
                        <span>
                          {curr1[index][0] == iter_curr_array[index][1]
                            ? i18n.dir() === 'ltr'
                              ? iter_curr_array[index][2]
                              : iter_curr_array[index][3]
                            : ''}
                        </span>
                      </Dropdown.Item>
                    </Link>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <ListItem anchotText={t('description.headerNews')} link='/news' />
            <li className='headerGetApp'>
              <Dropdown>
                <Dropdown.Toggle id='dropdown-basic'>
                  {t('description.headerDownload')}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href='https://play.google.com/store/apps/details?id=com.currencyapplication.currencyapplication&hl=ar&gl=US'>
                    <img
                      src='/google-play-badge.png'
                      className='headerAppIcon'
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href='https://play.google.com/store/apps/details?id=com.currencyapplication.currencyapplication&hl=ar&gl=US'>
                    <img
                      src='/apple-store-badge.png'
                      className='headerAppIcon'
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>

          <ul className='headerSocialIcons'>
            <ListItemSocial
              icon={
                <img
                  src='/social-icons/messenger.png'
                  style={{ width: '50%' }}
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
                  style={{ width: '50%' }}
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
                  style={{ width: '50%' }}
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
                  style={{ width: '50%' }}
                />
              }
              iconStatus={true}
              liClass='liIcon'
              linkSocial='https://www.instagram.com/syria.exchange/'
            />
          </ul>
          <ul className='languageIcons'>
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                type='submit'
                onClick={() => i18n.changeLanguage(lng)}
                className='liLanguage'
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </ul>
        </nav>
      </div>
      <hr />
      <div className='container header2'>
        <nav className='nav-menu2 '>
          <ul className=''>
            <Button className='btn-refresh' onClick={refreshPage}>
              <HeaderRefreshIcon
                anchotText={t('description.headerReload')}
                icon={<img src='/system-update.png' className='refresh' />}
                iconStatus={true}
              />
            </Button>
            {city_curr[0][1].slice(0, 7).map((item, index) => (
              <ListItem2
                anchotText={
                  i18n.dir() === 'ltr'
                    ? item.curr_en_name.toUpperCase()
                    : item.curr_ar_name
                }
                usdClass='usdClass'
                cityNameClass='cityNameClass'
                value={item.curr_buy}
                value2={item.curr_status}
                curr_difference={item.curr_difference}
                icon={
                  item.curr_difference >= 0 ? (
                    <RiArrowUpSLine className='value2arrowUp' />
                  ) : (
                    <RiArrowDownSLine className='value2arrowDown' />
                  )
                }
                iconStatus={true}
                key={index}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
