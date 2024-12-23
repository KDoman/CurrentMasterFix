import "./LoadingSpinner.scss";

export const LoadingSpinner = () => {
  return (
    <div className="spinner_contianer">
      <div className="spinner" />
      <p>Ładowanie...</p>
    </div>
  );
};
