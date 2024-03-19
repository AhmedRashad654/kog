import React from "react";
import style from "../../componantStyle/AddQuestions.module.css";
import { useState } from "react";
import MultiQuestions from "./MultiQuestions";
import TextQuestions from "./TextQuestions";
export default function AddQuestions() {
  const [question, setquestion] = useState("");
  return (
    <>
      <div className={style.AddQuestions} >
        <p>اختر نوع السؤال</p>
        <p
          className={question === "multi" ? style.check : ""}
          onClick={() => setquestion(() => "multi")}
        >
          اختار من متعدد
        </p>
        <p
          className={question === "text" ? style.check : ""}
          onClick={() => setquestion(() => "text")}
        >
          مقالي
        </p>
        {question === "multi" ? <MultiQuestions /> : ""}
        {question === "text" ? <TextQuestions /> : ""}
      </div>
  
    </>
  );
}
