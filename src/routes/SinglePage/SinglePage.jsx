import { useParams } from "react-router-dom";
import "./SinglePage.scss";
import ReactDOM from "react-dom";
import { listData } from "../../data/data";

export const SinglePage = () => {
  const { id } = useParams();
  console.log(id);

  return ReactDOM.createPortal(
    <div className="single_page_modal">
      {console.log(listData.filter((item) => item.id == id))}
    </div>,
    document.getElementById("portal-root")
  );
};
