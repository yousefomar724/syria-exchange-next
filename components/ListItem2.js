import Link from 'next/link'
import { useRouter } from 'next/router'

const ListItem2 = ({
  anchotText,
  icon,
  iconStatus,
  usdClass,
  cityNameClass,
  value,
  value2,
  curr_difference,
  Lihover,
  city_curr_nameToShow,
  city_curr_Ename,
  divmargin,
}) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <li className={Lihover}>
      {/* state: {
            city_curr_nameToShow: city_curr_nameToShow,
            city_curr_Ename: city_curr_Ename,
          }, */}
      <Link
        href='/syrian-pound'
        onClick={
          path === '/syrian-pound' &&
          (() => router.reload(window.location.pathname))
        }
      >
        <a>
          <div>
            <p className={cityNameClass}>{anchotText}</p>
            <p className={usdClass}>USD دولار</p>
          </div>
          <div className={divmargin}>
            <span className='font-number value'>{value}</span>
            <span
              className={
                curr_difference >= 0
                  ? 'value2green font-number'
                  : 'value2red font-number'
              }
            >
              {value2} {iconStatus && icon}
            </span>
          </div>
        </a>
      </Link>
    </li>
  )
}

ListItem2.defaultProps = {
  anchotText: '',
  style: '',
  usdClass: '',
}

export default ListItem2
