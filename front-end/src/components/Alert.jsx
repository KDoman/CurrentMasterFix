import "./Alert.scss";

export const Alert = ({ children, isSuccess, isError }) => {
  return (
    <div
      className={`alert_container ${isSuccess && "success"} ${
        isError && "error"
      }`}
    >
      {children}
    </div>
  );
};
