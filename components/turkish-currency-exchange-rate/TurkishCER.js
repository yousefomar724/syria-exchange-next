import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
/* import { format } from "date-fns"; */
/* import { ar, enUS } from "date-fns/locale"; */
import Toast from 'react-bootstrap/Toast'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
/* import RefreshIcon from "../RefreshIcon"; */
import { useTranslation } from 'react-i18next'
/* import sysUpdate from "../../assets/system-update.png"; */
import CurrencyRowSkeleton from '../skeletons/CurrencyRowSkeleton'
import formatDate from '../../lib/formatDate'
import turkingFlagImg from '../currIcons/TRY.png'
import Skeleton from 'react-loading-skeleton'

const TurkishCER = ({ title, border, color }) => {
  const { t, i18n } = useTranslation()
  const [seeMore, setSeeMore] = useState(false)
  /*  const [date, setDate] = useState(
    format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
      locale: i18n.dir() === "ltr" ? enUS : ar,
    })
  ); */
  /*  const refreshDate = (e) => {
    e.preventDefault();
    setDate(
      format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
        locale: i18n.dir() === "ltr" ? enUS : ar,
      })
    );
  }; */

  const [tryCoins, setTryCoins] = useState()
  //Currency
  useEffect(() => {
    async function getTryCoins() {
      const request = fetch(
        'https://syria-exchange.com/panel/v1/api/international-coins.php'
      )
      const response = await request
      const parsed = await response.json()
      setTryCoins(parsed)
    }
    getTryCoins()
  }, [])

  // if (tryCoins === undefined) {
  //   return null;
  // }

  /* const curr = tryCoins.inter_coins.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      if ((key = "TRY")) return [key, value];
    }
    return curr;
  }); */

  const curr = tryCoins?.inter_coins.find((item) => {
    let Try = []
    Object.keys(item).map((it) => {
      if ((it = 'TRY')) {
        Try = item[it]
      }
      return Try
    })
    return Try
  })

  const changeSeeMore = () => {
    setSeeMore(true)
  }

  const ToastRadius = i18n.dir() === 'ltr' ? 'toastRadiusEN' : 'toastRadiusAr'

  return (
    <section className='cer'>
      <div className='section-branding flex-wrap'>
        <div className='heading'>
          <img
            src={turkingFlagImg}
            alt='Syria Exchange'
            className='logo'
            style={{ maxWidth: '32px' }}
          />
          <h2 className='title' style={{ color: color }}>
            {title}
          </h2>
        </div>

        {/* {tryCoins?.last_update && (
        <div className="date">{formatDate(new Date(tryCoins.last_update)) }</div>
        )} */}

        <time className='date' dateTime={tryCoins?.last_update}>
          {tryCoins?.last_update ? (
            formatDate(new Date(tryCoins.last_update))
          ) : (
            <Skeleton width={120} style={{ opacity: '0.2' }} />
          )}
        </time>
      </div>

      <div
        className='cerToast TurkishCer'
        id={seeMore ? 'TurkishCerShow' : ' '}
      >
        <div
          className='cerToastFirstRow '
          style={{ backgroundColor: border, color: color }}
        >
          <p className='TryCerToastHeader grid-col-span-2'>
            {t('description.headerCERCurr')}
          </p>
          <p className='TryCerToastHeader'>
            {t('description.headerCERCurrBuy')}
          </p>
          <p className='TryCerToastHeader'>
            {t('description.headerCERCurrSell')}
          </p>
          <p className='TryCerToastHeader grid-col-span-2'>
            {t('description.headerCERCurr')}
          </p>
          <p className='TryCerToastHeader'>
            {t('description.headerCERCurrBuy')}
          </p>
          <p className='TryCerToastHeader'>
            {t('description.headerCERCurrSell')}
          </p>
        </div>
        {curr
          ? curr.TRY.map((item) => (
              <Toast key={item.id} className={`grid-col-span-4 ${ToastRadius}`}>
                <Toast.Body className='toastBody'>
                  <div className=' toastFirstFragment grid-col-span-2'>
                    <img
                      src={require(`../currIcons/${item.curr_abbreviation}.png`)}
                      alt={item.curr_abbreviation}
                      className='toastFlag'
                    />
                    <div>
                      <p>
                        {i18n.dir() === 'ltr'
                          ? item.curr_en_name.toUpperCase()
                          : item.curr_ar_name}
                      </p>
                      <small>{item.curr_abbreviation}</small>
                    </div>
                    <div className='toastArrowDiv'>
                      {item.curr_status < '0' ? (
                        <RiArrowDownSLine className='toastArrowDown' />
                      ) : (
                        <RiArrowUpSLine className='toastArrowUp' />
                      )}
                      <small
                        className={
                          item.curr_status < '0'
                            ? 'font-number red'
                            : 'font-number green'
                        }
                      >
                        {item.curr_status}
                      </small>
                    </div>
                  </div>
                  <p className='toastPara font-number'>{item.curr_buy}</p>
                  <p className='toastPara font-number'>{item.curr_sell}</p>
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

export default TurkishCER
