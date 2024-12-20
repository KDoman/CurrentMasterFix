import "./Card.scss";
import { Link, useNavigate } from "react-router-dom";
import PERSON_ICON from "../assets/Person.svg";
import HOME_ICON from "../assets/Home.svg";
import STAR_ICON from "../assets/Star.svg";
import CHAT_ICON from "../assets/chat.svg";
import SAVE_ICON from "../assets/save.svg";
import { Label } from "./Label";
import { GetReviewAvg } from "../helpers/GetReviewAvg";

export const Card = ({ item }) => {
  const navigate = useNavigate();

  const showAdditionalCardInfo = (item) => {
    navigate(`/list/${item.id}`);
  };

  return (
    <div
      role="button"
      onClick={() => showAdditionalCardInfo(item)}
      className="card_container"
    >
      <div className="image_container">
        <img src={item.img} />
      </div>
      <div className="text_container">
        <div>
          <div className="text_name_container">
            <img
              className="svg_icon"
              src={PERSON_ICON}
              alt="Obrazek w formacie SVG reprezentujące osobę"
            />
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <div className="text_city_container">
              <img
                className="svg_icon"
                src={HOME_ICON}
                alt="Obrazek w formacie SVG przedstawiający domek"
              />
              <span className="text_city">{item.city}</span>
            </div>
          </div>
          <div className="text_rating">
            <img
              className="svg_icon"
              src={STAR_ICON}
              alt="Obrazek w formacie SVG przedstawiający gwiazdę"
            />
            <p className="text_rating_p">
              <span className="reviews_counter">({item.rating.length})</span>
              {GetReviewAvg(item.rating)}
            </p>
          </div>
        </div>
        <div className="text_down_card_info">
          <div className="text_contact_icons">
            <Link to={"/messages"}>
              <img
                src={CHAT_ICON}
                alt="Obrazek w formacie SVG przedstawiający wiadomości"
              />
            </Link>
            <img
              src={SAVE_ICON}
              alt="Obrazek w formacie SVG przedstawiający możliwość zapisania fachowca do ulubionych"
            />
          </div>
          <div className="text_labels">
            {item.professions.map((proffesion) => (
              <Label key={proffesion}>{proffesion}</Label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
