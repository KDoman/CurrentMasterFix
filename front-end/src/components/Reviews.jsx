import "./Reviews.scss";
import STAR_LOGO from "../assets/Star.svg";

export const Reviews = ({ name, rating }) => {
  return (
    <div className="reviews_container">
      {rating.length ? (
        <h3>
          Opinie o fachowcu <span className="review_span_name">{name}</span>
        </h3>
      ) : (
        "Ten fachowiec nie ma jeszcze wystawionych ocen."
      )}

      {rating.map((rate, id) => (
        <div className="review" key={id}>
          <p>
            <i>{rate.name}</i>
          </p>
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
