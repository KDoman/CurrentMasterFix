import "./UserMessage.scss";

export const UserMessage = ({ children }) => {
  return (
    <div className="user_message_container">
      <div className="user_message">{children}</div>
    </div>
  );
};
