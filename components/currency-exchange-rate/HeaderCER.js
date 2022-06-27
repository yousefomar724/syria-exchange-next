import { useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import CurrencyRowSkeleton from '../skeletons/CurrencyRowSkeleton'
import formatDate from '../../lib/formatDate'

const HeaderCER = ({ coins }) => {
  const { t, i18n } = useTranslation()

  const [dropdownTitle, SetDropdownTitle] = useState({
    title: i18n.dir() === 'ltr' ? 'Damascus' : 'دمشق',
    city_name: 'damascus',
    show: false,
  })

  const curr = coins?.city_coins.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value]
    }
  })
  const ToastRadius = i18n.dir() === 'ltr' ? 'toastRadiusEN' : 'toastRadiusAr'

  let curr1 = curr?.filter((item) => item[0] === dropdownTitle.city_name)

  useEffect(() => {
    window.localStorage.removeItem('title')
    window.localStorage.removeItem('city_name')
  })

  return (
    <section className='cer'>
      <div className='section-branding'>
        <div className='heading'>
          <img src='/logo.svg' alt='Syria Exchange' className='logo' />
          <h2 className='title'>{t('description.headerCERTitle')}</h2>
        </div>

        <time className='date' dateTime={coins?.last_update}>
          {coins?.last_update ? (
            formatDate(new Date(coins.last_update))
          ) : (
            <Skeleton width={120} style={{ opacity: '0.2' }} />
          )}
        </time>
      </div>

      <div className='cerToast'>
        <div className='cerToastFirstRow'>
          <p className='cerToastHeader grid-col-span-2'>
            {t('description.headerCERCurr')}
          </p>
          <p className='cerToastHeader'>{t('description.headerCERCurrBuy')}</p>
          <p className='cerToastHeader'>{t('description.headerCERCurrSell')}</p>
          <p className='cerToastHeader grid-col-span-2'>
            {t('description.headerCERCurr')}
          </p>
          <p className='cerToastHeader'>{t('description.headerCERCurrBuy')}</p>
          <p className='cerToastHeader'>{t('description.headerCERCurrSell')}</p>
        </div>
        {curr1
          ? curr1[0][1].slice(0, 12).map((city) => (
              <Toast className={`grid-col-span-4 ${ToastRadius}`} key={city.id}>
                <Toast.Body className='toastBody'>
                  <div className=' toastFirstFragment grid-col-span-2'>
                    <img
                      src={`/currIcons/${city.curr_abbreviation}.png`}
                      alt={city.curr_abbreviation}
                      className='toastFlag'
                    />
                    <div>
                      <p>
                        {i18n.dir() === 'ltr'
                          ? city.curr_en_name.toUpperCase()
                          : city.curr_ar_name}
                      </p>
                      <small>{city.curr_abbreviation}</small>
                    </div>
                    <div className='toastArrowDiv'>
                      {city.curr_status < '0' ? (
                        <RiArrowDownSLine className='toastArrowDown' />
                      ) : (
                        <RiArrowUpSLine className='toastArrowUp' />
                      )}
                      <small
                        className={
                          city.curr_status < '0'
                            ? ' font-number red'
                            : ' font-number green'
                        }
                      >
                        {city.curr_status}
                      </small>
                    </div>
                  </div>
                  <p className='toastPara font-number'>{city.curr_buy}</p>
                  <p className='toastPara font-number'>{city.curr_sell}</p>
                </Toast.Body>
              </Toast>
            ))
          : Array.from({ length: 12 }).map((_, index) => (
              <CurrencyRowSkeleton key={index} />
            ))}
      </div>
      <div className='seeMore'>
        <Link href='/syrian-pound'>
          <a>{t('description.headerCERSeeMore')}</a>
        </Link>
      </div>
    </section>
  )
}

export default HeaderCER
