import "./Card.scss";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <Link to={`/${item.id}`} className="card_container">
      <div className="image_container">
        <img src={item.img} />
      </div>
      <div className="text_container">
        <div className="text_name_container">
          <p>{item.name}</p>
          <p>{item.surname}</p>
          <span className="text_city">{item.city}</span>
        </div>
        <div className="text_rating">
          <p>
            {(
              item.rating.reduce((acc, val) => acc + val) / item.rating.length
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};
