import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="loading_div">
      <p>
        Ładowanie<span className="dots">...</span>
      </p>
      <p>proszę czekać</p>
    </div>
  );
};
