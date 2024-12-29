import "./AccountSettings.scss";
import { GetReviewAvg } from "../../helpers/GetReviewAvg";
import { Label } from "../../components/Label";
import FULL_LOGO_MASTER_FIX from "../../assets/Master_fix_full_logo.png";
import PENCIL_SVG from "../../assets/Pencil.svg";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import DEFAULT_AVATAR from "../../assets/Person.svg";

export const AccountSettings = () => {
  const { loggedAccount, isLoading } = useContext(GlobalStates);

  return (
    <div className="account_settings_container">
      <Outlet />
      <div className="left">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="account_settings_main_content">
            <div className="account_entry_text">
              <h1>Twoje informacje</h1>
              <Link to={"/account/edit"}>
                <img src={PENCIL_SVG} alt="" />
              </Link>
            </div>
            <div className="main_box">
              <div className="box">
                <img
                  src={loggedAccount?.avatar || DEFAULT_AVATAR}
                  className="avatar"
                />
              </div>
              <div className="box">
                <p>
                  Imię: <span>{loggedAccount?.name || "Nieznane"}</span>
                </p>
              </div>
              <div className="box">
                <p>
                  Nazwisko: <span>{loggedAccount?.surname || "-"}</span>
                </p>
              </div>
              <div className="box">
                <p>
                  Miasto: <span>{loggedAccount?.city || "-"}</span>
                </p>
              </div>
              <div className="box">
                <p>
                  Telefon: <span>{loggedAccount?.phone || "-"}</span>
                </p>
              </div>
              <div className="box">
                <p>
                  Email: <span>{loggedAccount?.email || "-"}</span>
                </p>
              </div>
              {loggedAccount?.isSpecialist && (
                <>
                  <div className="box categories">
                    <p>
                      Specjalizacje:
                      {loggedAccount?.professions?.map((prof) => (
                        <Label key={prof}>{prof}</Label>
                      ))}
                    </p>
                  </div>
                  <div className="box textarea_div">
                    <p>O mnie:</p>
                    <textarea
                      value={loggedAccount?.aboutMe}
                      disabled
                    ></textarea>
                  </div>
                  <div className="box">
                    <p>
                      Średnia ocen:{" "}
                      {!loggedAccount.rating && (
                        <span>{GetReviewAvg(loggedAccount?.rating)}</span>
                      )}
                    </p>
                  </div>
                  <div className="box">
                    <p>
                      Ilość ocen:{" "}
                      <span>{loggedAccount?.rating?.length || 0}</span>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="right">
        <img src={FULL_LOGO_MASTER_FIX} alt="Całe logo Master Fix" />
      </div>
    </div>
  );
};
