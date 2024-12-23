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
        <div className="grid_container">
          <div className="main_div_info">
            <img
              className="avatar"
              src={specialist.avatar || PERSON_SVG}
              alt=""
            />
            <div className="info_box">
              <div className="box">
                <div className="mini_box">
                  <img src={GREY_PERSON_SVG} alt="" />
                  <p>Imię i nazwisko</p>
                </div>
                <p className="p_info">
                  {specialist.name} {specialist.surname}
                </p>
              </div>
              <div className="box">
                <div className="mini_box">
                  <img src={GREY_PHONE_SVG} alt="" />
                  <p>Numer telefonu</p>
                </div>
                <p className="p_info">{specialist.phone}</p>
              </div>
              <div className="box">
                <div className="mini_box">
                  <img src={GREY_EMAIL_SVG} alt="" />
                  <p>Email</p>
                </div>
                <p className="p_info">{specialist.email}</p>
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
