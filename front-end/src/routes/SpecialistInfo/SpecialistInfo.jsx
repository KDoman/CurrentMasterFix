import { HistoryOrder } from "../../components/HistoryOrder";
import "./SpecialistInfo.scss";
import { listData } from "../../data/data";
import { Label } from "../../components/Label";
import HOME_LOGO from "../../assets/Home.svg";
import STAR_ICON from "../../assets/Star.svg";
import INFO_ICON from "../../assets/Info.svg";
import { Link, Outlet } from "react-router-dom";
import { GetReviewAvg } from "../../helpers/GetReviewAvg";
import SEND_ICON from "../../assets/Send.svg";
import { ReviewComment } from "../../components/ReviewComment";
import { UserMessage } from "../../components/UserMessage";
import { ResponseUserMessage } from "../../components/ResponseUserMessage";
import { BackIcon } from "../../components/BackIcon";
export const SpecialistInfo = () => {
  return (
    <>
      <div className="messages_page_entry_div">
        <Link to={`/list`}>
          <BackIcon />
        </Link>
        <h1>Informacje fachowca</h1>
      </div>
      <div className="messages_page_container">
        <div className="left_history_messages">
          <HistoryOrder />
        </div>
        <div className="middle_title_name">
          <div className="middle_title_img_and_name">
            <img src={listData[0].img} />
            <p>
              {listData[0].name} {listData[0].surname}
            </p>
          </div>
          <Link to={"/messages/more_proffesionalist_info"}>
            <div className="middle_title_container_for_svg">
              <img src={INFO_ICON} alt="" />
            </div>
          </Link>
        </div>
        <div className="middle_message_chat">
          <Outlet />
          <UserMessage>this is user message.</UserMessage>
          <ResponseUserMessage>this is response Message</ResponseUserMessage>
        </div>
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
            {listData[0].rating.map((rating, i) => (
              <ReviewComment key={i}>{rating.message}</ReviewComment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
