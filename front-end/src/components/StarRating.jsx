import { useState } from "react";
import "./StarRating.scss";

export const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentRating) => {
    setRating(currentRating);
    if (onRatingChange) {
      onRatingChange(currentRating);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index} id="mark">
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => handleClick(currentRating)}
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#dcd71d" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
};
