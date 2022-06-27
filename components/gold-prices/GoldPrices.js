import Toast from 'react-bootstrap/Toast'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import CurrencyRowSkeleton from '../skeletons/CurrencyRowSkeleton'
import formatDate from '../../lib/formatDate'

const GoldPrices = ({ prices }) => {
  const { t, i18n } = useTranslation()

  const gold = prices?.gold_prices.find((item) => {
    for (let [key, _] of Object.entries(item)) {
      return key === 'SYP'
    }
  })

  let toastEnClass = i18n.dir() === 'ltr' ? 'toastEN' : ''

  return (
    <section className='cer'>
      <div className='section-branding'>
        <div className='heading'>
          <img src='/gold.png' alt='Syria Exchange' className='logo' />
          <h2 className='title'>{t('description.GoldPricesTitle')}</h2>
        </div>

        <time className='date' dateTime={prices?.last_update}>
          {prices?.last_update ? (
            formatDate(new Date(prices.last_update))
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
        {gold?.['SYP']
          ? gold['SYP'].slice(0, 6).map((item, index) => (
              <Toast
                className={`grid-col-span-4 ${toastEnClass}`}
                key={index}
                style={
                  item.gold_type === 'gold' && {
                    borderLeftColor: '#fdbd11',
                    borderRightColor: '#fdbd11',
                  }
                }
              >
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
                    <div className='toastArrowDiv SyGoldToastArrowDiv'>
                      {item.gold_status < '0' ? (
                        <RiArrowDownSLine className='toastArrowDown' />
                      ) : (
                        <RiArrowUpSLine className='toastArrowUp' />
                      )}
                      <small
                        className={
                          item.gold_status < '0'
                            ? 'font-number red '
                            : 'font-number green '
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
          : Array.from({ length: 6 }).map((_, index) => (
              <CurrencyRowSkeleton key={index} />
            ))}
      </div>
      <div className='seeMore'>
        <Link href='/gold'>
          <a>{t('description.headerCERSeeMore')}</a>
        </Link>
      </div>
    </section>
  )
}

export default GoldPrices
