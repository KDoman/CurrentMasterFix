import "./Card.scss";
import { useNavigate } from "react-router-dom";
import PERSON_ICON from "../assets/Person.svg";
import HOME_ICON from "../assets/Home.svg";
import INFO_ICON from "../assets/Info.svg";
import STAR_ICON from "../assets/Star.svg";
import { Label } from "./Label";
import { GetReviewAvg } from "../helpers/GetReviewAvg";

export const Card = ({ specialist, setClickedCardPosition }) => {
  const navigate = useNavigate();

  const showAdditionalCardInfo = (specialist) => {
    navigate(`/list/${specialist._id}`);
  };

  const getPinCardPosition = ({ latitude, longitude }) => {
    setClickedCardPosition([latitude, longitude]);
  };

  return (
    <div
      role="button"
      className="card_container"
      onClick={() => getPinCardPosition(specialist)}
    >
      <div className="image_container">
        <img src={specialist.avatar || PERSON_ICON} />
      </div>
      <div className="text_container">
        <div>
          <div className="text_name_container">
            <img
              className="svg_icon"
              src={PERSON_ICON}
              alt="Obrazek w formacie SVG reprezentujące osobę"
            />
            <p>{specialist.name}</p>
            <p>{specialist.surname}</p>
            <div className="text_city_container">
              <img
                className="svg_icon"
                src={HOME_ICON}
                alt="Obrazek w formacie SVG przedstawiający domek"
              />
              <span className="text_city">{specialist.city}</span>
            </div>
          </div>
          <div className="text_rating">
            <img
              className="svg_icon"
              src={STAR_ICON}
              alt="Obrazek w formacie SVG przedstawiający gwiazdę"
            />
            <p className="text_rating_p">
              <span className="reviews_counter">
                ({specialist.rating.length})
              </span>
              {specialist.rating.length && GetReviewAvg(specialist.rating)}
            </p>
          </div>
        </div>
        <div className="text_down_card_info">
          <div className="text_contact_icons">
            <img
              src={INFO_ICON}
              alt="Obrazek w formacie SVG przedstawiający informacje"
              onClick={() => showAdditionalCardInfo(specialist)}
            />
          </div>
          <div className="text_labels">
            {specialist.professions.map((proffesion) => (
              <Label key={proffesion}>{proffesion}</Label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
