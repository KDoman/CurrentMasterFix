import { Link } from "react-router-dom";
import "./MoreProffesionalistInfo.scss";
import { BackIcon } from "../../components/BackIcon";
import { listData } from "../../data/data";

export const MoreProffesionalistInfo = () => {
  return (
    <div className="add_order_container">
      <Link to={"/messages"}>
        <BackIcon />
      </Link>
      <h2>Informacje na temat fachowca</h2>
      <div className="add_order_info">
        <p className="info">
          <span>Imię</span> {listData[0].name}
        </p>
        <p className="info">
          <span>Nazwisko</span> {listData[0].surname}
        </p>
        <p className="info">
          <span>Miasto</span> {listData[0].city}
        </p>
        <p>
          <span>O mnie</span> {listData[0].aboutMe}
        </p>
      </div>
    </div>
  );
};
