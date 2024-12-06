import { Link } from "react-router-dom";
import "./AddOrder.scss";
import { BackIcon } from "../../components/BackIcon";

export const AddOrder = () => {
  return (
    <div className="add_order_container">
      <Link to={"/messages"}>
        <BackIcon />
      </Link>
      <h2>Zamów fachowca</h2>
      <form action="">
        <input type="text" />
      </form>
    </div>
  );
};
