import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import Toast from 'react-bootstrap/Toast'

const CustomSkeleton = () => {
  const { i18n } = useTranslation()

  const toastParaPadding =
    i18n.dir() === 'ltr' ? 'CentralBankPaddingEn' : 'CentralBankPaddingAr'
  return (
    <Toast className='grid-col-span-3  ToastBank ToastbankGrid'>
      <Toast.Body className='bankToastBody'>
        <div className='toastFirstFragmentCentralBank grid-col-span-4'>
          <div className='toastBankIconDiv'>
            <img
              src='/centralBank.png'
              alt='bankIcon'
              className='toastBankIcon'
            />
          </div>
          <Skeleton width={70} height={12} />
        </div>
        <div className='toastSecondFragmentCentralBank grid-col-span-2'>
          <div className='toastArrowDiv'></div>

          <p className={`${toastParaPadding} toastPara font-number`}>
            <Skeleton width={40} height={12} />
          </p>
        </div>
      </Toast.Body>
    </Toast>
  )
}

export default CustomSkeleton
