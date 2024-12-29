import "./WriteReview.scss";
import MASTER_FULL_LOGO from "../../assets/Master_fix_full_logo.png";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { StarRating } from "../../components/StarRating";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { sendReview } from "../../api_utils/api";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";
import { useParams } from "react-router-dom";
import { Alert } from "../../components/Alert";

export const WriteReview = () => {
  const { specialistId } = useParams();

  const { loggedAccount } = useContext(GlobalStates);
  const [name, setName] = useState(loggedAccount?.name || null);
  const [mark, setMark] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonAvailable, setIsButtonAvailable] = useState(true);

  const { isError, setIsError, isSuccess, setIsSuccess } =
    useGetStatusFromResponse();

  const handleRatingChange = (rating) => {
    setMark(rating);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !mark || !message) {
      setIsError("Wszystkie pola muszą być wypełnione");
      return;
    }
    try {
      setIsLoading(true);
      setIsButtonAvailable(false);
      await sendReview(specialistId, loggedAccount._id, name, mark, message);
      setIsSuccess("Ocena została wystawiona");
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
      setIsButtonAvailable(true);
    }
  };

  return (
    <div className="write_review_container">
      <div className="left">
        <form onSubmit={onSubmit}>
          <img src={MASTER_FULL_LOGO} alt="Master całe Logo" />
          <div className="input_div">
            <label htmlFor="login">Imie</label>
            <input
              type="text"
              id="login"
              defaultValue={loggedAccount?.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input_div">
            <label htmlFor="mark">Ocena</label>
            <StarRating onRatingChange={handleRatingChange} />
          </div>
          <div className="input_div">
            <label htmlFor="comment">Komentarz</label>
            <textarea
              id="comment"
              placeholder="Poprawnie wykonana robota..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" disabled={!isButtonAvailable}>
            Wyślij
          </button>
          {isLoading && <LoadingSpinner />}
          {isError && <Alert isError>{isError}</Alert>}
          {isSuccess && <Alert isSuccess>{isSuccess}</Alert>}
        </form>
      </div>
      <div className="right">
        <img src={MASTER_FULL_LOGO} alt="" />
      </div>
    </div>
  );
};
