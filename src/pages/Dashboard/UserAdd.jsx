import React, { useState } from "react";
import style from "../../componantStyle/AddUser.module.css";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useUser } from "../../context/Context";
export default function UserAdd() {
  const navigate = useNavigate();
  const [ addUser, setAddUser ] = useState( { gender: "N", role: "user" } );
  const [ errorListDashboard, setErrorListDashboard ] = useState( null )
  const [ loading, setLoading ] = useState( false );
  const [ errorDashboard, setErrorDashboard ] = useState( null );
  const { direction } = useUser();
  function handleChange(e) {
    setAddUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
    function validationRegisterDashboard() {
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
      return schema.validate(addUser, { abortEarly: false });
    }
  async function handlesubmit(e) {
    e.preventDefault();
    let responseValidateRegister = validationRegisterDashboard();
    if (responseValidateRegister.error) {
      setErrorListDashboard([responseValidateRegister.error.details]);
    } else {
      setErrorListDashboard(null);
      try {
        setLoading(true);
        const response = await fetch(
          "https://kog.pythonanywhere.com/api/v1/accounts/register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addUser),
          }
        );
        const result = await response.json();
        setLoading(false);
        if ( result.tokens ) {
          //  getAllUserDashboard();
          navigate("/dashboard/user");
        } else {
          setErrorDashboard(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <div className={style.collAddUser}>
      <form className={style.form}>
        {errorListDashboard &&
          errorListDashboard.map((error, index) => (
            <p key={index} className="alert alert-warning">
              {error[index].message}
            </p>
          ))}
        <div className={style.headAddUser}>
          <button className="btn btn-secondary" onClick={handlesubmit}>
            {loading ? (
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              "اضافة"
            )}
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/dashboard/user");
            }}
          >
            رجوع
          </button>
        </div>
        <div className={style.colladduser}>
          <div className={style.inp}>
            <label htmlFor="full_name">
              {" "}
              {direction === "EN" ? "full_name" : "الاسم"}
            </label>
            <br />
            <input
              type="text"
              name="full_name"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className={style.inp}>
            <label htmlFor="email_address">
              {direction === "EN" ? "email_address" : "الايميل"}
            </label>
            <br />
            <input type="email" name="email_address" onChange={handleChange} />
            {errorDashboard?.email_address && (
              <p className="error">{errorDashboard?.email_address}</p>
            )}
          </div>
        </div>
        <div className={style.colladduser}>
          <div className={style.inp}>
            <label htmlFor="city">
              {direction === "EN" ? "city" : "المدينة"}
            </label>
            <br />
            <input type="city" name="city" onChange={handleChange} />
          </div>
          <div className={style.inp}>
            <label htmlFor="mobile">
              {" "}
              {direction === "EN" ? "phone_number" : "رقم الهاتف"}
            </label>
            <br />
            <input
              type="number"
              name="mobile"
              id="mobile"
              onChange={handleChange}
            />
            {errorDashboard?.mobile && (
              <p className="error">{errorDashboard?.mobile}</p>
            )}
          </div>
        </div>
        <div className={style.colladduser}>
          <div className={style.inp}>
            <label htmlFor="whatsشpp">
              {direction === "EN" ? "whatsApp" : "واتساب"}
            </label>
            <br />
            <input
              type="number"
              name="whatsapp"
              id="whatsapp"
              onChange={handleChange}
            />
          </div>
          <div className={style.inp}>
            <label htmlFor="gender">
              {direction === "EN" ? "gender" : "النوع"}
            </label>
            <br />
            <select name="gender" id="gender" onChange={handleChange}>
              <option value="N">N</option>
              <option value="F">F</option>
              <option value="M">M</option>
            </select>
          </div>
        </div>
        <div className={style.colladduser}>
          <div className={style.inp}>
            <label htmlFor="role">
              {direction === "EN" ? "role" : "الدور"}
            </label>
            <br />
            <select
              name="role"
              id="role"
              className={style.role}
              onChange={handleChange}
            >
              <option value="user">
                {direction === "EN" ? "user" : "مستخدم"}
              </option>
              <option value="admin">
                {direction === "EN" ? "admin" : "ادمن"}
              </option>
            </select>
          </div>
          <div className={style.inp}>
            <label htmlFor="password">  {direction==="EN"?"password":"كلمة المرور" }</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.inp}>
          <label htmlFor="password"> {direction==="EN"?"confirm password":"تاكيد كلمة المرور"}  </label>
          <br />
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
