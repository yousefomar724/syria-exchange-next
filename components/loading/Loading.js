import logo from "../logo.gif";
const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "45%",
      }}
    >
      <img src={logo} alt="" />
    </div>
  );
};

export default Loading;
