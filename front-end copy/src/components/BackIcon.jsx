import "./BackIcon.scss";
import BACK_ICON from "../assets/Back.svg";

export const BackIcon = () => {
  return (
    <div className="back_icon_container">
      <img src={BACK_ICON} alt="" className="back_icon" />
    </div>
  );
};
