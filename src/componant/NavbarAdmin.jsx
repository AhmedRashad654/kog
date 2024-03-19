import React from "react";
import style from "../componantStyle/NavbarAdmin.module.css";

import imglogo from "../image/KOG LOGO.png";
import { useUser } from "../context/Context";
import { useNavigate } from "react-router-dom";
import EnglishAndArabic from "../componant/EnglishAndArabic";

export default function NavbarAdmin() {
  ///////////////check token////////////////////
  const refreshToken = localStorage.getItem("token_refresh");
  const accessToken = localStorage.getItem("token_access");
  const navigate = useNavigate();
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
          body: JSON.stringify({ refresh_token: refreshToken }),
        }
      );
      const result = await request.json();
      console.log(result);
      if (result.detail === "Successfully logged out.") {
        localStorage.clear();
        // setlogout(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }
  const { direction } = useUser();
  return (
    <div className={style.NavbarAdmin}>
      <ul>
        <li>
          <img src={imglogo} alt="" />
        </li>
        <li>
          <div>
            <button className="btn btn-secondary" onClick={handleLogout}>
              {direction === "EN" ? "Logout" : "تسجيل الخروج"}
            </button>
          </div>
          <div className="arab">
            <li>
              <EnglishAndArabic />
            </li>
          </div>
        </li>
      </ul>
    </div>
  );
}
