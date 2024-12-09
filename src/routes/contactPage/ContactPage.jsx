import "./ContactPage.scss";
import FULL_LOGO from "../../assets/Master_fix_full_logo.png";
import FACEBOOK_LOGO from "../../assets/Facebook.svg";
import YOUTUBE_LOGO from "../../assets/Youtube.svg";
import INSTAGRAM_LOGO from "../../assets/Instagram.svg";
import LINKEDIN_LOGO from "../../assets/Linkedin.svg";

export const ContactPage = () => {
  return (
    <div className="contact_page_container">
      <div className="left"></div>
      <div className="right"></div>
      <div className="contact_page_contect">
        <img src={FULL_LOGO} alt="Master Fix całe logo" />
        <div className="contact_page_contect_content">
          <div className="contact_box">
            <h2>Godziny pracy</h2>
            <p>Poniedziałek - Piątek: 8:00 - 18:00</p>
            <p>Sobota: 9:00 - 15:00</p>
            <p>Niedziela: Zamknięte</p>
          </div>
          <div className="contact_box">
            <h2>Dział współpracy</h2>
            <p>masterfixcoop@gmail.com</p>
          </div>
          <div className="contact_box">
            <h2>Dział wsparcia</h2>
            <p>masterfixsupp@gmail.com</p>
          </div>
          <div className="contact_box">
            <h2>Zadzwoń do nas</h2>
            <p>+48 123 123 123</p>
          </div>
          <div className="contact_box">
            <h2>Nasze social media</h2>
            <div className="contact_box_imgs">
              <div className="contact_mini_box_img">
                <img src={FACEBOOK_LOGO} alt="Facebook logo" />
              </div>
              <div className="contact_mini_box_img">
                <img src={YOUTUBE_LOGO} alt="Youtube logo" />
              </div>
              <div className="contact_mini_box_img">
                <img src={INSTAGRAM_LOGO} alt="Instagram logo" />
              </div>
              <div className="contact_mini_box_img">
                <img src={LINKEDIN_LOGO} alt="Linkedin logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
