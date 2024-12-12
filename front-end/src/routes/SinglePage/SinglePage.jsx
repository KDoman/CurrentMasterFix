import { useParams } from "react-router-dom";
import "./SinglePage.scss";
import { listData } from "../../data/data";
import { PersonInfoModal } from "../../components/PersonInfoModal";

export const SinglePage = () => {
  const { id } = useParams();

  return (
    <div className="single_page_modal">
      <div className="single_page_content">
        {listData
          .filter((item) => item.id == id)
          .map((obj) => (
            <PersonInfoModal obj={obj} key={obj.id} />
          ))}
      </div>
    </div>
  );
};
