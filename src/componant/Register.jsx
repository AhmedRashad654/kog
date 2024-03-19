import React, { useState } from "react";
import "../componantStyle/register.css";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import EnglishAndArabic from "./EnglishAndArabic";
import { useUser } from "../context/Context";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ gender: "N", role: "user" });
  const [errorList, setErrorList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ error, setError ] = useState( null );
  const { direction } = useUser();
  function handlechange(e) {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function validationRegister() {
    let schema = Joi.object({
      full_name: Joi.string().max(240).required(),
      email_address: Joi.string()
        .email({ tlds: ["com", "not", "org"] })
        .max(240)
        .required(),
      city: Joi.string().max(240).required(),
      mobile: Joi.string()
        .length(11)
        .pattern(/^[0-9]+$/)
        .required(),
      whatsapp: Joi.string()
        .length(11)
        .pattern(/^[0-9]+$/)
        .required(),
      password: Joi.string().min(6).required(),
      password2: Joi.string().min(6).valid(Joi.ref("password")).required(),
      gender: Joi.string().valid("M", "F", "N"),
      role: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  }

  async function formatSubmit(e) {
    e.preventDefault();
    let responseValidateRegister = validationRegister();
    if (responseValidateRegister.error) {
      setErrorList([responseValidateRegister.error.details]);
    } else {
      setErrorList(null);
      try {
        setLoading(true);
        const response = await fetch(
          "https://kog.pythonanywhere.com/api/v1/accounts/register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        const result = await response.json();
        setLoading(false);
        if (result.tokens) {
          navigate("/login");
        } else {
          setError(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
 

  return (
    <>
      <EnglishAndArabic />
      <form className="formRegister" onSubmit={formatSubmit}>
        {errorList &&
          errorList.map((error, index) => (
            <p key={index} className="alert alert-warning">
              {error[index].message}
            </p>
          ))}
        <div className="inp">
          <label htmlFor="full_name">
            {direction === "EN" ? "full_name" : "الاسم بالكامل"}
          </label>
          <br />
          <input
            type="text"
            name="full_name"
            id="name"
            onChange={handlechange}
          />
        </div>
        <div className="inp">
          <label htmlFor="email_address">
            {direction === "EN" ? "email_address" : "الايميل"}
          </label>
          <br />
          <input type="email" name="email_address" onChange={handlechange} />
          {error?.email_address && (
            <p className="error">{error?.email_address}</p>
          )}
        </div>
        <div className="inp">
          <label htmlFor="city">
            {direction === "EN" ? "city" : "المدينة"}
          </label>
          <br />
          <input type="city" name="city" onChange={handlechange} />
        </div>
        <div className="inp">
          <label htmlFor="mobile">
            {direction === "EN" ? "mobile" : "رقم الهاتف"}
          </label>
          <br />
          <input
            type="number"
            name="mobile"
            id="mobile"
            onChange={handlechange}
          />
          {error?.mobile && <p className="error">{error?.mobile}</p>}
        </div>
        <div className="inp">
          <label htmlFor="whatsapp">
            {direction === "EN" ? "whatsapp" : "رقم الواتساب"}
          </label>
          <br />
          <input
            type="number"
            name="whatsapp"
            id="whatsapp"
            onChange={handlechange}
          />
        </div>
        <div className="inp">
          <label htmlFor="password">
            {direction === "EN" ? "password" : "كلمة المرور"}
          </label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlechange}
          />
        </div>
        <div className="inp">
          <label htmlFor="password2">
            {direction === "EN" ? "Confirm Password" : "تاكيد كلمة المرور"}
          </label>
          <br />
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={handlechange}
          />
        </div>
        <div className="inp">
          <label htmlFor="gender">
            {direction === "EN" ? "gender" : "النوع"}
          </label>
          <br />
          <select name="gender" id="gender" onChange={handlechange}>
            <option value="N">N</option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>

        <div className="inp">
          <button className="btn btn-secondary">
            {loading ? (
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <> {direction === "EN" ? "register" : "تسجيل"}</>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
