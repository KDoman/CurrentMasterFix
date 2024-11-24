import "./PersonInfoModal.scss";

export const PersonInfoModal = ({ obj }) => {
  return (
    <div className="person_info_container">
      <img src={obj.img} />
      <div className="person_info_modal_name">
        {obj.name} {obj.surname}
      </div>
    </div>
  );
};
