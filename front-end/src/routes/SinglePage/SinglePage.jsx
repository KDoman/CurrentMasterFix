import "./SinglePage.scss";
import { PersonInfoModal } from "../../components/PersonInfoModal";
import { useContext } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { useParams } from "react-router-dom";

export const SinglePage = () => {
  const { allUsers } = useContext(GlobalStates);
  const { id } = useParams();

  return (
    <div className="single_page_modal">
      <div className="single_page_content">
        {allUsers
          .filter((user) => user._id == id)
          .map((currentUser) => (
            <PersonInfoModal obj={currentUser} key={currentUser.id} />
          ))}
      </div>
    </div>
  );
};
