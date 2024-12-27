import "./SpecialistInfo.scss";
import { Link, useParams } from "react-router-dom";
import { BackIcon } from "../../components/BackIcon";
import { useEffect, useState } from "react";
import { findSpecialistById } from "../../api_utils/api";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";
import PERSON_SVG from "../../assets/Person.svg";
import GREY_PERSON_SVG from "../../assets/GreyPerson.svg";
import GREY_PHONE_SVG from "../../assets/GreyPhone.svg";
import GREY_EMAIL_SVG from "../../assets/GreyEmail.svg";
import GREY_STAR_SVG from "../../assets/GreyStar.svg";
import GREY_HOME_SVG from "../../assets/GreyHome.svg";
import GREY_SKILLS_SVG from "../../assets/Skills.svg";
import { GetReviewAvg } from "../../helpers/GetReviewAvg";
import { Label } from "../../components/Label";

export const SpecialistInfo = () => {
  const { specialistId } = useParams();
  const [specialist, setSpecialist] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { isError, setIsError } = useGetStatusFromResponse();

  useEffect(() => {
    setIsLoading(true);
    const fetchSpecialistById = async (specialistId) => {
      try {
        const specialistFoundById = await findSpecialistById(specialistId);
        const targetSpecialist = specialistFoundById.specialist;
        setSpecialist(targetSpecialist);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSpecialistById(specialistId);
  }, [specialistId]);
  return (
    <>
      <div className="messages_page_entry_div">
        <Link to={`/list`}>
          <BackIcon />
        </Link>
        <h1>Informacje fachowca</h1>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : !isError ? (
        <div className="container">
          <div className="main_div_info">
            <img
              className="avatar"
              src={specialist.avatar || PERSON_SVG}
              alt=""
            />
            <div className="info_box">
              <div className="special_box">
                <div className="mini_box">
                  <img src={GREY_PERSON_SVG} alt="" />
                  <p>Imię i nazwisko</p>
                </div>
                <p className="p_info">
                  {specialist.name} {specialist.surname}
                </p>
              </div>
              <div className="special_box">
                <div className="mini_box">
                  <img src={GREY_PHONE_SVG} alt="" />
                  <p>Numer telefonu</p>
                </div>
                <p className="p_info">{specialist.phone}</p>
              </div>
              <div className="special_box">
                <div className="mini_box">
                  <img src={GREY_EMAIL_SVG} alt="" />
                  <p>Email</p>
                </div>
                <p className="p_info">{specialist.email}</p>
              </div>
              <div className="special_box">
                <div className="mini_box">
                  <img src={GREY_HOME_SVG} alt="" />
                  <p>Lokalizacja</p>
                </div>
                <p className="p_info">{specialist.city}</p>
              </div>
              <div className="special_box">
                <div className="mini_box">
                  <img src={GREY_STAR_SVG} alt="" />
                  <p>Średnia ocen</p>
                </div>
                <p className="p_info">
                  <span className="mark_counter">
                    ({specialist.rating?.length})
                  </span>{" "}
                  {specialist.rating?.length && GetReviewAvg(specialist.rating)}
                </p>
              </div>
            </div>
          </div>
          <div className="about_me_info">
            <div className="special_box">
              <div className="mini_box">
                <img src={GREY_PERSON_SVG} alt="" />
                <p>O mnie</p>
              </div>
              <p className="p_info about_me">{specialist.aboutMe}</p>
            </div>
            <div className="special_box professions">
              <div className="mini_box">
                <img src={GREY_SKILLS_SVG} alt="" />
                <p>Specjalizacje</p>
              </div>
              <div className="prof_info_div">
                {specialist.professions?.map((prof) => (
                  <div className="prof_info" key={prof}>
                    <Label>{prof}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Pobieranie danych nie powiodło się</p>
      )}
    </>
  );
};
