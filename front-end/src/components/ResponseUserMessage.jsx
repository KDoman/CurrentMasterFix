import "./ResponseUserMessage.scss";

export const ResponseUserMessage = ({ children }) => {
  return (
    <div className="user_message_response_container">
      <div className="user_message_response">{children}</div>
    </div>
  );
};
