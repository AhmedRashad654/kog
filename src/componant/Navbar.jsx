import React, { useEffect, useRef, useState } from "react";
import "../componantStyle/Navbar.css";
import { Link, NavLink, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import imgLogoNav from "../image/KOG LOGO.png";
import {useUser} from '../context/Context'
import  EnglishAndArabic from '../componant/EnglishAndArabic'
export default function Navbar() {
  const { direction } = useUser();
  ///////////////check token////////////////////
  const refreshToken = localStorage.getItem( 'token_refresh' );
  const accessToken = localStorage.getItem( 'token_access' );
  const navigate = useNavigate();
  const [ logout, setlogout ] = useState( false );
  useEffect( () => {
      if (refreshToken && accessToken) {
        setlogout(false);
      } else {
        setlogout(true);
      }
  },[accessToken, refreshToken])

 
  /////////////////toggle open close////////////////////
  const drop = useRef();
  const bar = useRef();
  const close = useRef();
  function toggle(e) {
    drop.current.style.height = "420px";
    bar.current.style.fontSize = "0";
    close.current.style.display = "block";
  }
  function closefuction() {
    drop.current.style.height = "0";
    bar.current.style.fontSize = "25px";
    close.current.style.display = "none";
  }

  ///////////////handleLogout///////////////////
  async function handleLogout() {

          try {
          
            const request = await fetch(
              "https://kog.pythonanywhere.com/api/v1/accounts/logout/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken} `,
                },
                body: JSON.stringify( {refresh_token:refreshToken} ),
              }
            );
            const result = await request.json();
            console.log( result );
            if ( result.detail === "Successfully logged out." ) {
              localStorage.clear();
              setlogout( true )
              navigate('/')
              }
          } catch (error) {
            console.error(error);
          }
  }

  return (
    <div className="navbaronly bg-dark">
      <div className="dropdownonly bg-dark" ref={drop}>
        <ul>
          <li>
            {" "}
            <NavLink to="/">{direction === "EN" ? "Home" : "الرئيسية"}</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/interview">
              {direction === "EN" ? "Interview" : "انترفيو"}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink>
              {direction === "EN" ? "Services" : "الخدمات"}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">
              {direction === "EN" ? "contact" : "تواصل"}
            </Link>
          </li>
          <li onClick={() => navigate("/register")}>
            {" "}
            {direction === "EN" ? "     sign in" : "حساب جديد"}{" "}
          </li>
          {logout ? (
            <li onClick={() => navigate("/login")}>
              {" "}
              {direction === "EN" ? "  Login" : "تسجيل دخول"}
            </li>
          ) : (
            <li onClick={handleLogout}>
              {direction === "EN" ? "  Logout" : "تسجيل خروج"}
            </li>
          )}
          <li>
            <EnglishAndArabic />
          </li>
        </ul>
      </div>
      <div className="leftNavbar">
        <div className="gt">
          <FontAwesomeIcon className="right" icon={faAngleRight} />

          <FontAwesomeIcon className="right" icon={faAngleRight} />
        </div>

        <img src={imgLogoNav} alt="" />
      </div>
      <div className="centerNavbar">
        <ul>
          <li>
            <NavLink to="/">{direction === "EN" ? "Home" : "الرئيسية"}</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/interview">
              {direction === "EN" ? "Interview" : "انترفيو"}
            </NavLink>
          </li>
          <li>
            <NavLink>{direction === "EN" ? "Services" : "الخدمات"}</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact">
              {direction === "EN" ? "contact" : "تواصل"}
            </NavLink>
          </li>
          <li>
            <EnglishAndArabic />
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          id="bar"
          ref={bar}
          onClick={toggle}
          className="hidden"
        />
        <FontAwesomeIcon
          icon={faX}
          id="close"
          ref={close}
          onClick={closefuction}
          className="hidden"
        />
      </div>
      <div className="rigthNavbar">
        <button
          className="btn btn-secondary"
          id="signin"
          onClick={() => navigate("/register")}
        >
          {direction === "EN" ? "     sign in" : "حساب جديد"}
        </button>
        {logout ? (
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/login")}
            id="login"
          >
            {direction === "EN" ? "  Login" : "تسجيل دخول"}
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="btn btn-secondary"
            id="logout"
          >
            {direction === "EN" ? "  Logout" : "تسجيل خروج"}
          </button>
        )}
      </div>
    </div>
  );
}
