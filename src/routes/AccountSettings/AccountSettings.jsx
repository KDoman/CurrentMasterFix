import "./AccountSettings.scss";
import { listData } from "../../data/data";
import { GetReviewAvg } from "../../helpers/GetReviewAvg";
import { Label } from "../../components/Label";
import FULL_LOGO_MASTER_FIX from "../../assets/Master_fix_full_logo.png";
import PENCIL_SVG from "../../assets/Pencil.svg";

export const AccountSettings = () => {
  return (
    <div className="account_settings_container">
      <div className="left">
        <div className="account_settings_main_content">
          <h1>Informacje konta</h1>
          <div className="main_box">
            <div className="box">
              <p>
                Imię: <span>{listData[0].name}</span>
              </p>
              <img src={PENCIL_SVG} alt="" />
            </div>
            <div className="box">
              <p>
                Nazwisko: <span>{listData[0].surname}</span>
              </p>
              <img src={PENCIL_SVG} alt="" />
            </div>
            <div className="box">
              <p>
                Miasto: <span>{listData[0].city}</span>
              </p>
              <img src={PENCIL_SVG} alt="" />
            </div>
            <div className="box">
              <p>
                Specjalizacje:{" "}
                {listData[0].professions.map((prof) => (
                  <Label key={prof}>{prof}</Label>
                ))}
              </p>
              <img src={PENCIL_SVG} alt="" />
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
            <button>Zapisz</button>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={FULL_LOGO_MASTER_FIX} alt="Całe logo Master Fix" />
      </div>
    </div>
  );
};
