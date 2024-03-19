import React from "react";
import style from "../../componantStyle/Dashborad.module.css";
import { NavLink, Outlet } from "react-router-dom";
import NavbarAdmin from "../../componant/NavbarAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faPhone, faTag } from "@fortawesome/free-solid-svg-icons";
import SearchDash from "./SearchDash";
import { useUser } from "../../context/Context";
export default function Dashboard() {
  const { direction } = useUser();
  return (
    <div className={style.perant}>
      <NavbarAdmin />
      <SearchDash />
      <div className={style.allcenter}>
        <div className={style.sidebar}>
          <div className={style.ollleftbar}>
            <div className={style.user}>
              <NavLink to="user">
                <div className={style.useractive}>
                  <div className={style.containicon}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <p>{direction === "EN" ? "users" : "المستخدمون"}</p>
                </div>
              </NavLink>
            </div>
            <div className={style.user}>
              <NavLink to="servies">
                <div className={style.useractive}>
                  <div className={style.containicon}>
                    <FontAwesomeIcon icon={faServicestack} />
                  </div>
                </div>
                <p>{direction === "EN" ? "services" : "الخدمات"}</p>
              </NavLink>
            </div>
            <div className={style.user}>
              <NavLink to="partner">
                <div className={style.useractive}>
                  <div className={style.containicon}>
                    <FontAwesomeIcon icon={faTag} />
                  </div>
                  <p>{direction === "EN" ? "partner" : "بارتنر"}</p>
                </div>
              </NavLink>
            </div>
            <div className={style.user}>
              <NavLink to="contact">
                <div className={style.useractive}>
                  <div className={style.containicon}>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <p>{direction === "EN" ? "Contact" : "تواصل"}</p>
                </div>
              </NavLink>
            </div>
            <div className={style.user}>
              <NavLink to="jops">
                <div className={style.useractive}>
                  <div className={style.containicon}>
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <p>{direction === "EN" ? "jops" : "الوظائف"}</p>
                </div>
              </NavLink>
            </div>
            <div className={style.user}>
              <NavLink to="advertisements">
                <div className={style.useractive}>
                  <div className={style.containicon}>
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                  <p>{ direction==="EN"?"images":"الصور"}</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={style.rigthbar}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
