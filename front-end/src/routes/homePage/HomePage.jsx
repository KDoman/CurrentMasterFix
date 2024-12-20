import "./HomePage.scss";
import BG_IMG from "../../assets/bg.png";
import { SearchBar } from "../../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalStates } from "../../context/GlobalState";

export const HomePage = () => {
  const { loggedAccount, isLoggedIn } = useContext(GlobalStates);

  const navigate = useNavigate();

  const goTo = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/proffesionalist_form");
    }
  };
  return (
    <>
      <div className="home_page">
        <div className="text_container">
          <div className="heading_wrapper">
            <h1>Master Fix</h1>
            <h2>Profesjonalna pomoc w zasięgu ręki</h2>
            <div className="p_text">
              <p>
                Potrzebujesz szybkiej pomocy fachowca? Z MasterFix znajdziesz go
                w mgnieniu oka.
              </p>
              <p>
                Wybierz kategorię i skontaktuj się z najlepszymi fachowcami.
              </p>
            </div>
            <SearchBar />
            <div className="boxes_of_numbers">
              <div className="box">
                <h2>2+</h2>
                <h3>Lat doświadczenia</h3>
              </div>
              <div className="box">
                <h2>1000+</h2>
                <h3>Dostępnych fachowców</h3>
              </div>
              <div className="box">
                <h2>10000+</h2>
                <h3>Zadowolonych klientów</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="img_container">
          <img src={BG_IMG} alt="Ilustracja przedstawiająca osoby pracujące" />
        </div>
      </div>
      {!loggedAccount?.isSpecialist && (
        <div className="proffesionalist_div">
          <div className="left"></div>
          <div className="right">
            <h2>
              Chcesz zostać fachowcem? <span>Wypełnij formularz!</span>
            </h2>
            <button onClick={goTo}>Formularz</button>
          </div>
        </div>
      )}
    </>
  );
};
