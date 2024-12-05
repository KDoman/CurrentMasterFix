import { HistoryChat } from "../../components/HistoryChat";
import "./Messages.scss";
import { listData } from "../../data/data";
import { Label } from "../../components/Label";
import HOME_LOGO from "../../assets/Home.svg";
import BACK_ICON from "../../assets/Back.svg";
import STAR_ICON from "../../assets/Star.svg";
import { Link } from "react-router-dom";
import { GetReviewAvg } from "../../helpers/GetReviewAvg";
import SEND_ICON from "../../assets/Send.svg";
import { ReviewComment } from "../../components/ReviewComment";
export const Messages = () => {
  return (
    <>
      <div className="messages_page_entry_div">
        <Link to={`/list`}>
          <div className="back_icon_container">
            <img src={BACK_ICON} alt="" className="back_icon" />
          </div>
        </Link>
        <h1>Historia wiadomości</h1>
      </div>
      <div className="messages_page_container">
        <div className="left_search_filter">
          <input
            type="text"
            name="message_search_input"
            id="message_search_input"
            placeholder="Wyszukaj"
          />
        </div>
        <div className="left_history_messages">
          <HistoryChat />
        </div>
        <div className="middle_title_name">
          <img src={listData[0].img} />
          <p>
            {listData[0].name} {listData[0].surname}
          </p>
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
          <img src={listData[0].img} />
          <p>
            {listData[0].name} {listData[0].surname}
          </p>
          <div className="right_profile_info_city">
            <img src={HOME_LOGO} alt="" />
            <p>{listData[0].city}</p>
          </div>
          <div className="right_profile_info_reviews">
            <img src={STAR_ICON} alt="" />
            <p>{GetReviewAvg(listData[0].rating)}</p>
          </div>
        </div>
        <div className="right_more_profile_info">
          <h2>Informacje</h2>
          <p>Odznaki</p>
          <div className="right_more_profile_info_labels">
            {listData[0].labels.map((label) => (
              <Label key={label}>{label}</Label>
            ))}
          </div>
          <p>Ostatnie komentarze</p>
          <div className="right_more_prfile_info_review_comment">
            {listData[0].rating.map((rating) => (
              <ReviewComment key={listData[0].id}>
                {rating.message}
              </ReviewComment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
