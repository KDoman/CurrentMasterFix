import "./CompanyPage.scss";
import FULL_LOGO from "../../assets/Master_fix_full_logo.png";

export const CompanyPage = () => {
  return (
    <div className="company_page_container">
      <div className="left"></div>
      <div className="right"></div>
      <div className="company_page_content">
        <img src={FULL_LOGO} alt="Master Fix całe logo" />
        <div className="company_page_steps_container">
          <h2>Nasza misja</h2>
          <p>
            Łączymy ludzi w potrzebie z najlepszymi specjalistami, aby codzienne
            problemy stawały się prostsze. Dzięki naszej platformie naprawa,
            instalacja czy pomoc techniczna są zawsze w zasięgu ręki – szybko,
            wygodnie i bez stresu.
          </p>
        </div>
        <div className="company_page_steps_second_container">
          <h2>Dlaczego Warto Nam Zaufać?</h2>
          <p>
            W MasterFix łączymy profesjonalizm z wygodą. Fachowcy, oceny i
            opinie klientów, a także prosty proces zamówienia sprawiają, że
            każda awaria staje się jedynie chwilowym problemem. Dbamy o Twoje
            bezpieczeństwo, oferując wsparcie na każdym kroku i gwarancję
            jakości usług, które pomagają Ci żyć spokojniej każdego dnia.
          </p>
        </div>
        <div className="company_page_steps_third_container">
          <h2>Nasze Osiągnięcia</h2>
          <p>
            Jesteśmy dumni z tego, jak wiele udało nam się osiągnąć dzięki
            zaufaniu naszych użytkowników i zaangażowaniu fachowców. Każdy dzień
            to nowa historia pomocy, rozwiązywania problemów i budowania
            relacji. Zrealizowaliśmy już tysiące zleceń, pomagając zarówno
            domownikom, jak i specjalistom rozwijać swoje umiejętności.
            Dziękujemy, że jesteście częścią naszej społeczności!
          </p>
        </div>
      </div>
    </div>
  );
};
