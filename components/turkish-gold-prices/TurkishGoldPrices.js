import { useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'
import CurrencyRowSkeleton from '../skeletons/CurrencyRowSkeleton'
import formatDate from '../../lib/formatDate'
import Skeleton from 'react-loading-skeleton'

const TurkishGoldPrices = ({ title, color, border }) => {
  const { t, i18n } = useTranslation()

  const [tryGold, setTryGold] = useState()
  useEffect(() => {
    async function getTryGold() {
      const request = fetch(
        'https://syria-exchange.com/panel/v1/api/international-gold.php'
      )
      const response = await request
      const parsed = await response.json()
      setTryGold(parsed)
    }
    getTryGold()
  }, [])

  const gold = tryGold?.gold_prices.map((item) => {
    let Try = []
    Object.keys(item).map((it) => {
      if ((it = 'TRY')) {
        Try = item[it]
      }
      return Try
    })
    return Try
  })
  const TryGold = gold?.filter((item) => item != undefined)
  let toastEnClass = i18n.dir() === 'ltr' ? 'toastEN' : ''

  return (
    <section className='cer'>
      <div className='section-branding flex-wrap'>
        <div className='heading'>
          <img
            src='/currIcons/TRY.png'
            alt='Syria Exchange'
            className='logo'
            style={{ maxWidth: '32px' }}
          />
          <h2 className='title' style={{ color: color }}>
            {title}
          </h2>
        </div>

        <time className='date' dateTime={tryGold?.last_update}>
          {tryGold?.last_update ? (
            formatDate(new Date(tryGold.last_update))
          ) : (
            <Skeleton width={120} style={{ opacity: '0.2' }} />
          )}
        </time>
      </div>

      <div className='goldPricesToast'>
        <div className='cerToastFirstRow' style={{ backgroundColor: border }}>
          <p className='TryCerToastHeader grid-col-span-2'>
            {t('description.MetalType')}
          </p>
          <p className='TryCerToastHeader'>TL</p>
          <p className='TryCerToastHeader'>{t('description.USD')}</p>
          <p className='TryCerToastHeader grid-col-span-2'>
            {t('description.MetalType')}
          </p>
          <p className='TryCerToastHeader'>TL</p>
          <p className='TryCerToastHeader'>{t('description.USD')}</p>
        </div>
        {TryGold
          ? TryGold[0].map((item, index) => (
              <Toast className={`grid-col-span-4 ${toastEnClass}`} key={index}>
                <Toast.Body className='toastBody'>
                  <div className=' toastFirstFragment grid-col-span-2'>
                    <img src='/gold.png' alt='Syria Exchange' className='img' />
                    <div>
                      <p>
                        {i18n.dir() === 'rtl'
                          ? item.gold_name
                          : item.gold_name_en}
                      </p>
                    </div>
                    <div className='toastArrowDiv'>
                      {item.gold_status < '0' ? (
                        <RiArrowDownSLine className='toastArrowDown' />
                      ) : (
                        <RiArrowUpSLine className='toastArrowUp' />
                      )}
                      <small
                        className={
                          item.gold_status < '0'
                            ? 'font-number red'
                            : 'font-number green'
                        }
                      >
                        {item.gold_status}
                      </small>
                    </div>
                  </div>
                  <p className='toastPara font-number'>{item.gold_any}</p>
                  <p className='toastPara font-number'>{item.gold_usd}</p>
                </Toast.Body>
              </Toast>
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <CurrencyRowSkeleton key={index} />
            ))}
      </div>
    </section>
  )
}

export default TurkishGoldPrices
