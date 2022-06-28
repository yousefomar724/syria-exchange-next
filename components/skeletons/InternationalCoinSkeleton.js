import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import Toast from 'react-bootstrap/Toast'

const InternationalCoinSkeleton = () => {
  const { i18n } = useTranslation()

  return (
    <Toast className='grid-col-span-5 ToastBank px-2'>
      <Toast.Body className='InternationalCoinsToastBody'>
        <div className='position-relative toastFirstFragmentInternationalCoins grid-col-span-2'>
          <Skeleton circle={'true'} width={30} height={30} />
          <Skeleton
            width={70}
            height={20}
            className='position-absolute top-50'
            style={
              i18n.dir() === 'ltr'
                ? { left: '60px', top: '50%', transform: 'translateY(-50%)' }
                : { right: '60px', top: '50%', transform: 'translateY(-50%)' }
            }
          />
        </div>
        <div className='equal'> = </div>
        <div className='position-relative d-flex toastFirstFragmentInternationalCoins grid-col-span-2'>
          <Skeleton
            width={70}
            height={20}
            className='position-absolute top-50'
            style={
              i18n.dir() === 'ltr'
                ? { right: '60px', top: '50%', transform: 'translateY(-50%)' }
                : { left: '60px', top: '50%', transform: 'translateY(-50%)' }
            }
          />
          <Skeleton circle={'true'} width={30} height={30} />
        </div>
      </Toast.Body>
    </Toast>
  )
}

export default InternationalCoinSkeleton
