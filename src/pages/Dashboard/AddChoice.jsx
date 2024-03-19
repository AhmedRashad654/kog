import React, { useState } from "react";
import style from "../../componantStyle/AddChoice.module.css";
import { useUser } from "../../context/Context";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

export default function AddChoice() {
  const { direction,noquestion} = useUser();
  const [choice, setChoice] = useState({
    body: "body",
    question:noquestion
  });
  const [errorListDashboard, setErrorListDashboard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorDashboard, setErrorDashboard] = useState(null);
  const [ addSuccess, setAddSuccess ] = useState( null );
  const navigate = useNavigate();
  function handleChange(e) {
    setChoice((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function validationChoiceAddDashboard() {
    let schema = Joi.object({
   
      body: Joi.string().required(),
      body_en: Joi.string().required(),
      body_ar: Joi.string().required(),
     
      question:Joi.number().required()
    });
    return schema.validate(choice, { abortEarly: false });
  }
  ////////////function submit/////////////
  async function handlesubmit(e) {
    e.preventDefault();
    let responseValidateChoiceAdd = validationChoiceAddDashboard();
    if (responseValidateChoiceAdd.error) {
      setErrorListDashboard([responseValidateChoiceAdd.error.details]);
    } else {
      setErrorListDashboard(null);
      try {
         setAddSuccess( false );
        setLoading(true);
        const response = await fetch(
          "https://kog.pythonanywhere.com/api/v1/home/choices/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token_access")}`,
            },
            body: JSON.stringify(choice),
          }
        );
        const result = await response.json();
        setLoading(false);
        if (result.created_at) {
           setAddSuccess(true)
        //   navigate("/dashboard/jops/displayquestionform");
        } else {
          setErrorDashboard(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <form className={style.TextQuestions}>
      {errorListDashboard &&
        errorListDashboard.map((error, index) => (
          <p key={index} className="alert alert-warning">
            {error[index].message}
          </p>
        ))}
      {addSuccess && (
        <p className="alert alert-success">
          {direction === "EN" ? "Success Added" : "تم الاضافة بنجاح"}
        </p>
      )}
      <div className={style.headForm}>
        <button className="btn btn-secondary" onClick={handlesubmit}>
          {loading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <>{direction === "EN" ? "Add choice" : "أضافة اختيار"} </>
          )}
        </button>
        <button
          className="btn btn-secondary"
                  onClick={ ( e ) => {
              e.preventDefault()
            navigate("/dashboard/jops/displayquestionform");
          }}
        >
          {direction === "EN" ? "Back" : "رجوع"}
        </button>
      </div>
      {/* <label htmlFor="form">
        {direction === "EN" ? "Enter number form" : "ادخل رقم الفورم"}
      </label>
      <br />
      <input type="number" name="form" id="form" onChange={handleChange} /> */}
      {errorDashboard?.question && (
        <p className="error">{errorDashboard?.question}</p>
      )}
      <label htmlFor="body_ar">
        {" "}
        {direction === "EN"
          ? "Enter choice Arabic"
          : "اكتب الاجابة باللغة العربية"}{" "}
      </label>
      <input type="text" name="body_ar" id="body_ar" onChange={handleChange} />
      <label htmlFor="body_en">
        {" "}
        {direction === "EN"
          ? "Enter choice English"
          : "اكتب الاجابة باللغة الانجليزية"}{" "}
      </label>
      <input type="text" name="body_en" id="body_en" onChange={handleChange} />
    </form>
  );
}
