import { HistoryChat } from "../../components/HistoryChat";
import "./Messages.scss";
import { listData } from "../../data/data";
import { Label } from "../../components/Label";
import HOME_LOGO from "../../assets/Home.svg";
import BACK_ICON from "../../assets/Back.svg";
import { Link } from "react-router-dom";

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
        <div className="middle_text_input"></div>
        <div className="right_profile_info">
          <img src={listData[0].img} />
          <p>
            {listData[0].name} {listData[0].surname}
          </p>
          <div className="right_profile_info_city">
            <img src={HOME_LOGO} alt="" />
            <p>{listData[0].city}</p>
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
          <div className="right_more_prfile_info_review"></div>
          <div className="right_more_prfile_info_review_comment"></div>
        </div>
      </div>
    </>
  );
};
