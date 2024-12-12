import "./Reviews.scss";
import STAR_LOGO from "../assets/Star.svg";

export const Reviews = ({ name, rating }) => {
  return (
    <div className="reviews_container">
      <h3>Historia fachowca {name}</h3>
      {rating.map((rate, id) => (
        <div className="review" key={id}>
          <p className="review_mark">
            <span className="review_counter">{`#${id + 1}`}</span>
            {rate.mark}
            <img src={STAR_LOGO} alt="" className="review_star" />
          </p>
          <p>{rate.message}</p>
        </div>
      ))}
    </div>
  );
};
