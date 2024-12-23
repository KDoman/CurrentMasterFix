import { HistoryOrder } from "../../components/HistoryOrder";
import "./SpecialistInfo.scss";
import { Label } from "../../components/Label";
import HOME_LOGO from "../../assets/Home.svg";
import STAR_ICON from "../../assets/Star.svg";
import { Link, useParams } from "react-router-dom";
import { GetReviewAvg } from "../../helpers/GetReviewAvg";
import SEND_ICON from "../../assets/Send.svg";
import { ReviewComment } from "../../components/ReviewComment";
import { BackIcon } from "../../components/BackIcon";
import { useEffect, useState } from "react";
import { findSpecialistById } from "../../api_utils/api";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";
export const SpecialistInfo = () => {
  const { specialistId } = useParams();
  const [specialist, setSpecialist] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { isError, setIsError } = useGetStatusFromResponse();

  useEffect(() => {
    setIsLoading(true);
    const fetchSpecialistById = async (specialistId) => {
      try {
        const specialistFoundById = await findSpecialistById(specialistId);
        const targetSpecialist = specialistFoundById.specialist;
        setSpecialist(targetSpecialist);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSpecialistById(specialistId);
  }, [specialistId]);
  return (
    <>
      <div className="messages_page_entry_div">
        <Link to={`/list`}>
          <BackIcon />
        </Link>
        <h1>Informacje fachowca</h1>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : !isError ? (
        <div className="messages_page_container">
          <div className="left_history_messages">
            <HistoryOrder />
          </div>
          <div className="middle_title_name">
            <div className="middle_title_img_and_name">
              <img src={specialist.avatar} />
              <p>
                {specialist.name} {specialist.surname}
              </p>
            </div>
          </div>
          <div className="middle_message_chat"></div>
          <div className="middle_text_input">
            <input
              type="text"
              name="messege_input_text"
              id="messege_input_text"
            />
            <div className="send_icon">
              <img src={SEND_ICON} alt="" />
            </div>
          </div>
          <div className="right_profile_info">
            <img src={specialist.avatar} />
            <p>
              {specialist.name} {specialist.surname}
            </p>
            <div className="right_profile_info_city">
              <img src={HOME_LOGO} alt="" />
              <p>{specialist.city}</p>
            </div>
            {specialist.rating?.mark && (
              <div className="right_profile_info_reviews">
                <img src={STAR_ICON} alt="" />
                <p>{GetReviewAvg(specialist.rating?.mark)}</p>
              </div>
            )}
          </div>
          <div className="right_more_profile_info">
            <h2>Informacje</h2>
            <p>Odznaki</p>
            <div className="right_more_profile_info_labels">
              {specialist.labels?.map((label) => (
                <Label key={label}>{label}</Label>
              ))}
            </div>
            <p>Ostatnie komentarze</p>
            <div className="right_more_prfile_info_review_comment">
              {specialist.rating?.map((rating, i) => (
                <ReviewComment key={i}>{rating.message}</ReviewComment>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Pobieranie danych nie powiodło się</p>
      )}
    </>
  );
};
