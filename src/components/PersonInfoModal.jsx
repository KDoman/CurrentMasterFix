import "./PersonInfoModal.scss";
import BACK_ICON from "../assets/Back.svg";
import { Link } from "react-router-dom";
import PERSON_LOGO from "../assets/Person.svg";
import HOME_LOGO from "../assets/Home.svg";
import { Reviews } from "./Reviews";
import STAR_LOGO from "../assets/Star.svg";
import { EndOfWord } from "../helpers/EndOfWord";
import { GetReviewAvg } from "../helpers/GetReviewAvg";

export const PersonInfoModal = ({ obj }) => {
  return (
    <div className="person_info_container">
      <div className="person_info_section">
        <Link to={`/list`}>
          <div className="back_icon_container">
            <img src={BACK_ICON} alt="" className="back_icon" />
          </div>
        </Link>
        <img src={obj.img} />
        <div className="person_info_modal_name">
          <div className="flex">
            <img src={PERSON_LOGO} alt="" />
            {obj.name} {obj.surname}
          </div>
          <div className="flex">
            <img src={HOME_LOGO} alt="" />
            <span className="person_info_modal_city">{obj.city}</span>
          </div>
          <div className="additional_info">
            <div className="flex person_info_modal_marks">
              <img src={STAR_LOGO} alt="" />
              {GetReviewAvg(obj.rating)}
              <div className="flex person_info_modal_counter_marks">{`${
                obj.rating.length
              } ${EndOfWord(obj.rating.length)} `}</div>
            </div>
          </div>
          <div className="button_container">
            <Link to={`/messages`}>
              <button className="personal_modal_button">Skontaktuj się!</button>
            </Link>
          </div>
        </div>
      </div>
      <Reviews name={obj.name} rating={obj.rating} />
    </div>
  );
};
