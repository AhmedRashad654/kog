import React from "react";
import style from "../../componantStyle/AddServices.module.css";
// import { useNavigate } from "react-router-dom";
// import AddServicesArabic from "./AddServicesArabic";
import AddServicesEnglish from "./AddServicesEnglish";
export default function AddServices() {
  // const [typeServices, setTypeServices] = useState("");
  // const navigate = useNavigate();


  return (
    <div className={style.collanimate}>
      {/* <div className={style.AddQuestions}> */}
        {/* <button
          className="btn btn-secondary "
          onClick={() => {
            navigate(-1);
          }}
        >
          رجوع
        </button> */}
        {/* <p className={style.firstp}>اختر لغة الخدمة </p>
        <p
          className={`${typeServices === "خدمة باللغة العربية" ?`${style.check}` : "" } ${style.secondp}`}
          onClick={() => setTypeServices(() => "خدمة باللغة العربية")}
        >
          خدمة باللغة العربية
        </p>
        <p
          className={ `${typeServices === "خدمة باللغة الانجليزية" ? `${style.check }` : ""} ${style.secondp}`}
          onClick={() => setTypeServices(() => "خدمة باللغة الانجليزية")}
        >
          خدمة باللغة الانجليزية
        </p> */}
        {/* {typeServices === "خدمة باللغة العربية" ? <AddServicesArabic /> : ""}
        {typeServices === "خدمة باللغة الانجليزية" ? ( */}
          <AddServicesEnglish />
        {/* // ) : (
        //   ""
        // )} */}
      {/* </div> */}
    </div>
  );
}
