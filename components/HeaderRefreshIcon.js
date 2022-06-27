const RefreshIcon = ({ anchotText, icon, iconStatus, liClass }) => {
  return (
    <li className={liClass}>
      <span>{iconStatus && icon}</span>
      <span /* className={liClass} */>{anchotText}</span>
    </li>
  )
}
RefreshIcon.defaultProps = {
  anchotText: '',
  style: '',
  liClass: '',
}
export default RefreshIcon
