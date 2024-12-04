import { HistoryChat } from "../../components/HistoryChat";
import "./Messages.scss";
import { listData } from "../../data/data";
import { Label } from "../../components/Label";

export const Messages = () => {
  return (
    <>
      <h1>Historia wiadomości</h1>
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
        </div>
        <div className="right_more_profile_info">
          <div className="right_more_profile_info_labels">
            {listData[0].labels.map((label) => (
              <Label key={label}>{label}</Label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
