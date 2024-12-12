import "./AccountSettings.scss";
import { listData } from "../../data/data";
import { GetReviewAvg } from "../../helpers/GetReviewAvg";
import { Label } from "../../components/Label";
import FULL_LOGO_MASTER_FIX from "../../assets/Master_fix_full_logo.png";
import PENCIL_SVG from "../../assets/Pencil.svg";
import { Link, Outlet } from "react-router-dom";

export const AccountSettings = () => {
  return (
    <div className="account_settings_container">
      <Outlet />
      <div className="left">
        <div className="account_settings_main_content">
          <div className="account_entry_text">
            <h1>Informacje konta</h1>
            <Link to={"/account/edit"}>
              <img src={PENCIL_SVG} alt="" />
            </Link>
          </div>
          <div className="main_box">
            <div className="box">
              <p>
                Imię: <span>{listData[0].name}</span>
              </p>
            </div>
            <div className="box">
              <p>
                Nazwisko: <span>{listData[0].surname}</span>
              </p>
            </div>
            <div className="box">
              <p>
                Miasto: <span>{listData[0].city}</span>
              </p>
            </div>
            <div className="box categories">
              <p>
                Specjalizacje:
                {listData[0].professions.map((prof) => (
                  <Label key={prof}>{prof}</Label>
                ))}
              </p>
            </div>
            <div className="box">
              <p>
                Średnia ocen: <span>{GetReviewAvg(listData[0].rating)}</span>
              </p>
            </div>
            <div className="box">
              <p>
                Ilość ocen: <span>{listData[0].rating.length}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={FULL_LOGO_MASTER_FIX} alt="Całe logo Master Fix" />
      </div>
    </div>
  );
};
