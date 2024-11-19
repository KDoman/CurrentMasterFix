import "./HomePage.scss";
import BG_IMG from "../../assets/bg.png";
import { SearchBar } from "../../components/SearchBar";

export const HomePage = () => {
  return (
    <div className="home_page">
      <div className="text_container">
        <div className="heading_wrapper">
          <h1>Master Fix</h1>
          <h2>Profesjonalna pomoc w zasięgu ręki</h2>
          <p>
            Potrzebujesz szybkiej pomocy fachowca? Z MasterFix znajdziesz go w
            mgnieniu oka. Wybierz kategorię oraz opisz problem i skontaktuj się
            z najlepszymi fachowcami.
          </p>
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
  );
};
