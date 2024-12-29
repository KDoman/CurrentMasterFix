import "./PersonInfoModal.scss";
import { Link, useNavigate } from "react-router-dom";
import PERSON_LOGO from "../assets/Person.svg";
import HOME_LOGO from "../assets/Home.svg";
import { Reviews } from "./Reviews";
import STAR_LOGO from "../assets/Star.svg";
import { EndOfWord } from "../helpers/EndOfWord";
import { GetReviewAvg } from "../helpers/GetReviewAvg";
import { BackIcon } from "./BackIcon";
import { useContext } from "react";
import { GlobalStates } from "../context/GlobalState";
import { useGetStatusFromResponse } from "../hooks/useGetStatusFromResponse";
import { Alert } from "../components/Alert";

export const PersonInfoModal = ({ obj }) => {
  const { loggedAccount } = useContext(GlobalStates);
  const { isError, setIsError } = useGetStatusFromResponse();

  const navigate = useNavigate();

  const reviewSubmit = () => {
    loggedAccount
      ? navigate(`/reviews/${obj._id}`)
      : setIsError("Zaloguj się aby wystawić ocenę");
    setTimeout(() => {
      setIsError(null);
    }, 1500);
  };

  return (
    <div className="person_info_container">
      <div className="alert_box">
        {isError && <Alert isError>{isError}</Alert>}
      </div>
      <div className="person_info_section">
        <Link to={`/list`} role="button">
          <BackIcon />
        </Link>
        <img src={obj.avatar || PERSON_LOGO} />
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
              {obj.rating.length && GetReviewAvg(obj.rating)}
              <div className="flex person_info_modal_counter_marks">{`${
                obj.rating.length
              } ${EndOfWord(obj.rating.length)} `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="button_container">
        <Link to={`/specialistInfo/${obj._id}`} role="button">
          <button className="personal_modal_button">Skontaktuj się</button>
        </Link>
        <Link onClick={reviewSubmit} role="button">
          <button className="personal_modal_button">Wystaw ocenę</button>
        </Link>
      </div>
      <Reviews name={obj.name} rating={obj.rating} />
    </div>
  );
};
