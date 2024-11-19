import { Navbar } from "./components/Navbar";

import "./global.scss";
import "./index.scss";
import "./layout.scss";
import { HomePage } from "./routes/homePage/HomePage";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
