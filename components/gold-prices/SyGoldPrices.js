import Toast from 'react-bootstrap/Toast'
import { useEffect, useState } from 'react'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import CurrencyRowSkeleton from '../skeletons/CurrencyRowSkeleton'
import formatDate from '../../lib/formatDate'

const SyGoldPrices = () => {
  const { t, i18n } = useTranslation()

  const [syGold, setSyGold] = useState()
  useEffect(() => {
    async function getSyGold() {
      const request = fetch(
        'https://syria-exchange.com/panel/v1/api/international-gold.php'
      )
      const response = await request
      const parsed = await response.json()
      setSyGold(parsed)
    }
    getSyGold()
  }, [])

  const gold = syGold?.gold_prices.map((item) => {
    let SYP = []
    Object.keys(item).map((it) => {
      if ((it = 'SYP')) {
        SYP = item[it]
      }
      return SYP
    })
    return SYP
  })
  const SypGold = gold?.filter((item) => item != undefined)
  console.log(SypGold)
  let toastEnClass = i18n.dir() === 'ltr' ? 'toastEN' : ''

  return (
    <section className='cer'>
      <div className='section-branding'>
        <div className='heading'>
          <img src='/gold.png' alt='Syria Exchange' className='logo' />
          <h2 className='title'>{t('description.GoldPricesTitle')}</h2>
        </div>

        <time className='date' dateTime={syGold?.last_update}>
          {syGold?.last_update ? (
            formatDate(new Date(syGold.last_update))
          ) : (
            <Skeleton width={120} style={{ opacity: '0.2' }} />
          )}
        </time>
      </div>

      <div className='goldPricesToast'>
        <div className='cerToastFirstRow'>
          <p className='cerToastHeader grid-col-span-2'>
            {t('description.MetalType')}
          </p>
          <p className='cerToastHeader'>{t('description.SYP')}</p>
          <p className='cerToastHeader'>{t('description.USD')}</p>
          <p className='cerToastHeader grid-col-span-2'>
            {t('description.MetalType')}
          </p>
          <p className='cerToastHeader'>{t('description.SYP')}</p>
          <p className='cerToastHeader'>{t('description.USD')}</p>
        </div>
        {SypGold
          ? SypGold[0].map((item, index) => (
              <Toast className={`grid-col-span-4 ${toastEnClass}`} key={index}>
                <Toast.Body className='toastBody SyGoldToastBody'>
                  <div className=' toastFirstFragment grid-col-span-2 SyGoldToastFirstFragment'>
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

export default SyGoldPrices
