import { Button } from 'react-bootstrap'
import { useState } from 'react'
/* import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale"; */
import Toast from 'react-bootstrap/Toast'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
/* import RefreshIcon from "../RefreshIcon"; */
/* import sysUpdate from "../../assets/system-update.png"; */
import { useTranslation } from 'react-i18next'

import CurrencyRowSkeleton from '../skeletons/CurrencyRowSkeleton'

const InterCoinCER = ({ title, border, color, items, lastUpdated }) => {
  const { t, i18n } = useTranslation()
  const [seeMore, setSeeMore] = useState(false)
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

  const changeSeeMore = () => {
    setSeeMore(true)
  }

  const ToastRadius = i18n.dir() === 'ltr' ? 'toastRadiusEN' : 'toastRadiusAr'

  return (
    <section className='cer'>
      <nav className='cerNav'>
        <ul className='justify-content-between'>
          <li className='d-flex'>
            <img src='/logo.svg' alt='Syria Exchange' className='img' />
            <li style={{ color: color }}>
              {i18n.dir() === 'ltr'
                ? `${title}
              ${t('description.exchangeRate')}`
                : `${t('description.exchangeRate')}
              ${title}`}
            </li>
          </li>
          <li style={{ margin: '0 16px' }}>
            <time className='date' dateTime={lastUpdated}>
              {lastUpdated}
            </time>
          </li>
          {/* <li style={{ color: color }} className="font-number date">
            {date}d
            <Button className="btn-refresh" onClick={refreshDate}>
              <RefreshIcon
                anchotText=""
                icon={
                  <img
                    src={sysUpdate}
                    alt="sysupdateIcon"
                    className="refresh"
                  />
                }
                iconStatus={true}
                liClass="refresh"
              />
            </Button>
          </li> */}
        </ul>
      </nav>
      <div
        className='cerToast TurkishCer'
        id={seeMore ? 'TurkishCerShow' : ' '}
      >
        <div
          className='cerToastFirstRow'
          style={{ backgroundColor: border, color: color }}
        >
          <p className='cerToastHeader grid-col-span-2'>
            {t('description.headerCERCurr')}
          </p>
          {/* <p className="cerToastHeader">{t("description.headerCERCurrBuy")}</p> */}
          <p className='cerToastHeader grid-col-span-2'>
            {t('description.headerCERCurrSell')}
          </p>
          <p className='cerToastHeader grid-col-span-2'>
            {t('description.headerCERCurr')}
          </p>
          {/* <p className="cerToastHeader">{t("description.headerCERCurrBuy")}</p> */}
          <p className='cerToastHeader grid-col-span-2'>
            {t('description.headerCERCurrSell')}
          </p>
        </div>
        {items
          ? items?.map((item) => (
              <Toast className={`grid-col-span-4 ${ToastRadius}`} key={item.id}>
                <Toast.Body className='toastBody'>
                  <div className=' toastFirstFragment grid-col-span-2 interCointoastFirstFragment'>
                    <img
                      src={require(`../currIcons/${item.curr_abbreviation}.png`)}
                      alt={item.curr_abbreviation}
                      className='toastFlag interCoinsToastFlag'
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
                  {/* <p className="toastPara font-number">{item.curr_buy}</p> */}
                  <p className='toastPara font-number grid-col-span-2 interCoinToastPara'>
                    {item.curr_sell}
                  </p>
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

export default InterCoinCER
