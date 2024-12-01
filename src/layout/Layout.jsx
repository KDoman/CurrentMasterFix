import { Navbar } from "../components/Navbar";
import "./layout.scss";

import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
