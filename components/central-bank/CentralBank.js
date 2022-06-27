import Toast from 'react-bootstrap/Toast'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import CentralBankSkeleton from '../skeletons/CentralBankSkeleton'
import formatDate from '../../lib/formatDate'

const CentralBank = ({ centralBankData }) => {
  const { t, i18n } = useTranslation()

  let toastParaPadding =
    i18n.dir() === 'ltr' ? 'CentralBankPaddingEn' : 'CentralBankPaddingAr'

  return (
    <section className='cer'>
      <div className='section-branding'>
        <div className='heading'>
          <img src='/logo.svg' alt='Syria Exchange' className='logo' />
          <h2 className='title'>{t('description.CentralbankTitle')}</h2>
        </div>

        <time className='date' dateTime={centralBankData?.last_update}>
          {centralBankData?.last_update ? (
            formatDate(new Date(centralBankData.last_update))
          ) : (
            <Skeleton width={120} style={{ opacity: '0.2' }} />
          )}
        </time>
      </div>

      <div className='bankToast'>
        <div className='cerToastFirstRow'>
          <p
            className='cerToastHeader grid-col-span-2'
            style={{ color: '#f7991e' }}
          >
            .
          </p>
          <p className='cerToastHeader'></p>
          <p className='cerToastHeader'></p>
          <p className='cerToastHeader grid-col-span-2'></p>
          <p className='cerToastHeader'></p>
          <p className='cerToastHeader'></p>
        </div>
        {centralBankData
          ? centralBankData.central_bank.map((item) => (
              <Toast
                className='grid-col-span-3  ToastBank ToastbankGrid'
                key={item.id}
              >
                <Toast.Body className='bankToastBody'>
                  <div className='toastFirstFragmentCentralBank grid-col-span-4'>
                    <div className='toastBankIconDiv'>
                      <img
                        src='/centralBank.png'
                        alt='bankIcon'
                        className='toastBankIcon'
                      />
                    </div>
                    <p>
                      {i18n.dir() === 'rtl'
                        ? item.bank_name
                        : item.bank_name_en}
                    </p>
                  </div>
                  <div className='toastSecondFragmentCentralBank grid-col-span-2'>
                    <div className='toastArrowDiv'>
                      {item.bank_status < '0' ? (
                        <RiArrowDownSLine className='toastArrowDown overflowHidden' />
                      ) : (
                        <RiArrowUpSLine className='toastArrowUp overflowHidden' />
                      )}
                      <small
                        className={
                          item.bank_status < '0'
                            ? 'font-number red overflowHidden'
                            : 'font-number green overflowHidden'
                        }
                      >
                        {item.bank_status}
                      </small>
                    </div>

                    <p className={`${toastParaPadding} toastPara font-number`}>
                      {item.bank_usd}
                    </p>
                  </div>
                </Toast.Body>
              </Toast>
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <CentralBankSkeleton key={index} />
            ))}
      </div>
    </section>
  )
}

export default CentralBank
