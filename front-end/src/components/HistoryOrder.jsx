import "./HistoryOrder.scss";
import { listData } from "../data/data";

export const HistoryOrder = ({ order }) => {
  return (
    <div className="history_chat_container">
      <img src={listData[0].img} />
      <p>
        {listData[0].name} {listData[0].surname}
      </p>
    </div>
  );
};
