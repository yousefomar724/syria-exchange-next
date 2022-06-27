import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'
import Toast from 'react-bootstrap/Toast'
import { useTranslation } from 'react-i18next'

import InternationalCoinSkeleton from '../skeletons/InternationalCoinSkeleton'
import formatDate from '../../lib/formatDate'

const InternationalCoins = ({ sectionClass, border, color }) => {
  const { t, i18n } = useTranslation()

  const { data } = useSWR('/international-coins.php')

  const curr = data?.inter_coins.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value]
    }
    return curr
  })
  const Usd = curr?.filter((item) => item[0] === 'USD')

  const tryUsd = Usd?.[0][1].filter((item) => item.curr_abbreviation === 'TRY')
  const sarUsd = Usd?.[0][1].filter((item) => item.curr_abbreviation === 'SAR')
  const aedUsd = Usd?.[0][1].filter((item) => item.curr_abbreviation === 'AED')

  const Eur = curr?.filter((item) => item[0] === 'EUR')
  const gbpEur = Eur?.[0][1].filter((i) => i.curr_abbreviation === 'GBP')
  const usdEur = Eur?.[0][1].filter((item) => item.curr_abbreviation === 'USD')
  const aedEur = Eur?.[0][1].filter((item) => item.curr_abbreviation === 'AED')

  const Try = curr?.filter((item) => item[0] === 'TRY')
  const sarTry = Try?.[0][1].filter((item) => item.curr_abbreviation === 'SAR')

  return (
    <section className={sectionClass}>
      <div
        className='section-branding justify-content-center'
        style={{ padding: '10px' }}
      >
        <div className='heading'>
          <h2
            className='title'
            style={{
              fontSize: '18px',
              padding: '3px 0',
              lineHeight: 1,
              ...(color && { color: color }),
            }}
          >
            {t('description.internationalCoinsTitle')}
          </h2>
        </div>
      </div>
      <div className='InternationalCoinsToastDiv'>
        <div
          className='InternationalCoinsToastFirstRow font-number'
          style={{ backgroundColor: border, color: color, padding: '1px 0' }}
        >
          {data?.last_update ? (
            formatDate(new Date(data.last_update))
          ) : (
            <Skeleton width={120} style={{ opacity: '0.5' }} />
          )}
        </div>

        {curr ? (
          <>
            <Toast className='grid-col-span-5 ToastBank'>
              <Toast.Body className='InternationalCoinsToastBody'>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <img
                    src='/currIcons/TRY.png'
                    alt=''
                    className='toastFlagIterCoins'
                  />
                  <small>TRY</small>
                  <p className='toastPara font-number mobileView'>
                    {tryUsd[0].curr_sell}
                  </p>
                </div>
                <div className='equal'> = </div>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <small className='mobileView2'>USD</small>
                  <p className='toastPara font-number mobileView2'>1</p>
                  <img
                    src='/currIcons/USD.png'
                    alt=''
                    className='toastFlagIterCoins'
                  />
                </div>
              </Toast.Body>
            </Toast>
            <Toast className='grid-col-span-5 ToastBank'>
              <Toast.Body className='InternationalCoinsToastBody'>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <img
                    src='/currIcons/GBP.png'
                    alt=' '
                    className='toastFlagIterCoins'
                  />
                  <small>GBP</small>
                  <p className='toastPara font-number mobileView'>
                    {gbpEur[0].curr_sell}
                  </p>
                </div>
                <div className='equal'> = </div>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <small className='mobileView2'>EUR</small>
                  <p className='toastPara font-number mobileView2'>1</p>
                  <img
                    src='/currIcons/EUR.png'
                    alt=''
                    className='toastFlagIterCoins'
                  />
                </div>
              </Toast.Body>
            </Toast>
            <Toast className='grid-col-span-5 ToastBank'>
              <Toast.Body className='InternationalCoinsToastBody'>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <img
                    src='/currIcons/USD.png'
                    alt=' '
                    className='toastFlagIterCoins'
                  />
                  <small>USD</small>
                  <p className='toastPara font-number mobileView'>
                    {usdEur[0].curr_sell}
                  </p>
                </div>
                <div className='equal'> = </div>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <small className='mobileView2'>EUR</small>
                  <p className='toastPara font-number mobileView2'>1</p>
                  <img
                    src='/currIcons/EUR.png'
                    alt=''
                    className='toastFlagIterCoins'
                  />
                </div>
              </Toast.Body>
            </Toast>
            <Toast className='grid-col-span-5 ToastBank'>
              <Toast.Body className='InternationalCoinsToastBody'>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <img
                    src='/currIcons/SAR.png'
                    alt=' '
                    className='toastFlagIterCoins'
                  />
                  <small>SAR</small>
                  <p className='toastPara font-number mobileView'>
                    {sarUsd[0].curr_sell}
                  </p>
                </div>
                <div className='equal'> = </div>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <small className='mobileView2'>USD</small>
                  <p className='toastPara font-number mobileView2'>1</p>
                  <img
                    src='/currIcons/USD.png'
                    alt=''
                    className='toastFlagIterCoins'
                  />
                </div>
              </Toast.Body>
            </Toast>
            <Toast className='grid-col-span-5 ToastBank'>
              <Toast.Body className='InternationalCoinsToastBody'>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <img
                    src='/currIcons/AED.png'
                    alt=' '
                    className='toastFlagIterCoins'
                  />
                  <small>AED</small>
                  <p className='toastPara font-number mobileView'>
                    {aedEur[0].curr_sell}
                  </p>
                </div>
                <div className='equal'> = </div>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <small className='mobileView2'>EUR</small>
                  <p className='toastPara font-number mobileView2'>1</p>
                  <img
                    src='/currIcons/EUR.png'
                    alt=''
                    className='toastFlagIterCoins'
                  />
                </div>
              </Toast.Body>
            </Toast>
            <Toast className='grid-col-span-5 ToastBank'>
              <Toast.Body className='InternationalCoinsToastBody'>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <img
                    src='/currIcons/SAR.png'
                    alt=' '
                    className='toastFlagIterCoins'
                  />
                  <small>SAR</small>
                  <p className='toastPara font-number mobileView'>
                    {sarTry[0].curr_sell}
                  </p>
                </div>
                <div className='equal'> = </div>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <small className='mobileView2'>TRY</small>
                  <p className='toastPara font-number mobileView2'>1</p>
                  <img
                    src='/currIcons/TRY.png'
                    alt=''
                    className='toastFlagIterCoins'
                  />
                </div>
              </Toast.Body>
            </Toast>
            <Toast className='grid-col-span-5 ToastBank'>
              <Toast.Body className='InternationalCoinsToastBody'>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <img
                    src='/currIcons/AED.png'
                    alt=' '
                    className='toastFlagIterCoins'
                  />
                  <small>AED</small>
                  <p className='toastPara font-number mobileView'>
                    {aedUsd[0].curr_sell}
                  </p>
                </div>
                <div className='equal'> = </div>
                <div className='toastFirstFragmentInternationalCoins grid-col-span-2'>
                  <small className='mobileView2'>USD</small>
                  <p className='toastPara font-number mobileView2'>1</p>
                  <img
                    src='/currIcons/USD.png'
                    alt=''
                    className='toastFlagIterCoins'
                  />
                </div>
              </Toast.Body>
            </Toast>
          </>
        ) : (
          Array.from({ length: 7 }).map((_, index) => (
            <InternationalCoinSkeleton key={index} />
          ))
        )}
      </div>
    </section>
  )
}

export default InternationalCoins
