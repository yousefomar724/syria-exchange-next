import Link from 'next/link'

const ListItem = ({
  anchotText,
  icon,
  iconStatus,
  liClass,
  AliClass,
  link,
  linkSocial,
}) => {
  return (
    <li className={liClass}>
      <Link href={link}>
        <a
          className={liClass}
          href={linkSocial}
          target='_blank'
          rel='noreferrer'
        >
          {iconStatus && icon} {anchotText}
        </a>
      </Link>
    </li>
  )
}

ListItem.defaultProps = {
  anchotText: '',
  style: '',
  liClass: '',
  link: '#',
  linkSocial: '',
}
export default ListItem
