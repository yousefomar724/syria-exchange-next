import { useTranslation } from "react-i18next";
import Skeleton from 'react-loading-skeleton';
import Toast from "react-bootstrap/Toast";

const CustomSkeleton = ({className, style}) => {
  const { i18n } = useTranslation();

  return (
    <Toast className={`grid-col-span-4 px-2 ${className ? className : ''}`} style={style}>
      <Toast.Body className="toastBody">
        <div className="position-relative d-flex">
          <Skeleton circle width={30} height={30}/>
          <Skeleton 
            width={70}  
            height={20}
            className="position-absolute top-50" 
            style={{ top: '50%', transform: 'translateY(-50%)',
                    ...(i18n.dir() === "ltr" ? {left: '50px'} : {right: '50px'})}}
            />
        </div> 
        <div />
        <Skeleton width={'40%'} height={13}/>
        <Skeleton width={'40%'} height={13} style={{...(i18n.dir() === "ltr" ? {marginLeft: '16px'} : {marginRight: '16px'})}}/>
      </Toast.Body>
    </Toast>
  )
}

export default CustomSkeleton