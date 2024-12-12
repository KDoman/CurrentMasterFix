import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { GlobalStatesProvider } from "./context/GlobalState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStatesProvider>
      <App />
    </GlobalStatesProvider>
  </StrictMode>
);
