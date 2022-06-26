const RefreshIcon = ({ anchotText, icon, iconStatus, liClass }) => {
  return (
    <li className={liClass}>
      <span>{iconStatus && icon}</span>
      <span href="#" className={liClass}>
        {anchotText}
      </span>
    </li>
  );
};
RefreshIcon.defaultProps = {
  anchotText: "",
  style: "",
  liClass: "",
};
export default RefreshIcon;
