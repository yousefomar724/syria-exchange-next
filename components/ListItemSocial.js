const ListItemSocial = ({
  anchotText,
  icon,
  iconStatus,
  liClass,
  linkSocial,
}) => {
  return (
    <li className={liClass}>
      <a className={liClass} href={linkSocial} target='_blank' rel='noreferrer'>
        {iconStatus && icon} {anchotText}
      </a>
    </li>
  )
}

ListItemSocial.defaultProps = {
  anchotText: '',
  style: '',
  liClass: '',
  link: '#',
  linkSocial: '',
}
export default ListItemSocial
