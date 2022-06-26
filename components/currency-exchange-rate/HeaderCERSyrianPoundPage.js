import { DropdownButton, Dropdown } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import { useEffect, useState } from 'react'
/* import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale"; */
import Toast from 'react-bootstrap/Toast'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
/* import RefreshIcon from "../RefreshIcon"; */
import { useTranslation } from 'react-i18next'

import CurrencyRowSkeleton from '../skeletons/CurrencyRowSkeleton'
import formatDate from '../../lib/formatDate'

const HeaderCERSyrianPoundPage = ({ city }) => {
  const { t, i18n } = useTranslation()
  const [seeMore, setSeeMore] = useState(false)
  const [dropdownTitle, SetDropdownTitle] = useState({
    title:
      city === undefined
        ? i18n.dir() === 'ltr'
          ? 'Damascus'
          : 'دمشق'
        : city.city_curr_nameToShow,
    city_name: city === undefined ? 'damascus' : city.city_curr_Ename,

    show: false,
  })

  const changeValues = (textToShow, city_name) => {
    SetDropdownTitle({
      title: textToShow,
      city_name: city_name,
      show: true,
    })
    // localStorage.setItem('title', textToShow)
    // localStorage.setItem('city_name', city_name)
  }

  /* const [date, setDate] = useState(
    format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
      locale: i18n.dir() === "ltr" ? enUS : ar,
    })
  );
  const refreshDate = (e) => {
    e.preventDefault();
    setDate(
      format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
        locale: i18n.dir() === "ltr" ? enUS : ar,
      })
    );
  }; */
  const [cityCoins, setCityCoins] = useState()

  useEffect(() => {
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

  // if (cityCoins === undefined) {
  //   return null;
  // }

  const curr = cityCoins?.city_coins.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value]
    }
    return curr
  })
  let localCityName = dropdownTitle.city_name
    ? dropdownTitle.city_name
    : 'Domascus'
  // localStorage.getItem('city_name') === undefined
  //   ? dropdownTitle.city_name
  //   : localStorage.getItem('city_name')

  let curr1 = curr?.filter((item) => item[0] === localCityName)
  const ToastRadius = i18n.dir() === 'ltr' ? 'toastRadiusEN' : 'toastRadiusAr'
  const changeSeeMore = () => {
    setSeeMore(true)
  }

  return (
    <section className='cer'>
      <div className='section-branding flex-wrap'>
        <div className='heading'>
          <img src='/logo.svg' alt='Syria Exchange' className='logo' />
          <h2 className='title'>{t('description.headerCERTitle')}</h2>
        </div>

        <DropdownButton
          id='dropdown-basic-button'
          className='align-self-end'
          title={
            dropdownTitle.title
            // localStorage.getItem('title') === undefined
            //   ? dropdownTitle.title
            //   : localStorage.getItem('title')
          }
        >
          {curr?.[0][1].map((city) => (
            <Dropdown.Item key={city.id} as='button'>
              <div
                onClick={(e) =>
                  changeValues(e.target.textContent, city.curr_en_name)
                }
              >
                {i18n.dir() === 'ltr'
                  ? city.curr_en_name.toUpperCase()
                  : city.curr_ar_name}
              </div>
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <time className='date' dateTime={cityCoins?.last_update}>
          {cityCoins?.last_update ? (
            formatDate(new Date(cityCoins.last_update))
          ) : (
            <Skeleton width={120} style={{ opacity: '0.2' }} />
          )}
        </time>
      </div>

      <div
        className='cerToast TurkishCer'
        id={seeMore ? 'TurkishCerShow' : ' '}
      >
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
          ? curr1[0][1].map((city) => (
              <Toast className={`grid-col-span-4 ${ToastRadius}`} key={city.id}>
                <Toast.Body className='toastBody'>
                  <div className=' toastFirstFragment grid-col-span-2'>
                    <img
                      src={require(`../currIcons/${city.curr_abbreviation}.png`)}
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
      {!seeMore && (
        <div className='seeMore' id='TrukishSeeMore' onClick={changeSeeMore}>
          <a>{t('description.headerCERSeeMore')}</a>
        </div>
      )}
    </section>
  )
}

export default HeaderCERSyrianPoundPage
