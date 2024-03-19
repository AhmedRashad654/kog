import React, { useEffect, useState } from "react";
import styles from "../componantStyle/Interview.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "../context/Context";
import EnglishAndArabic from "../componant/EnglishAndArabic";

export default function Interview() {
  const [ jopValide, setJopValide ] = useState( [] );
  const [ selectQuestion, setSelectQuestion ] = useState( [] );
  const [ selectAnswers, setSelectAnswers ] = useState( {} );
  const { direction, } = useUser();

  useEffect( () => {
    async function getJopValide() {
      try {
        let request = await fetch(
          "https://kog.pythonanywhere.com/api/v1/home/forms/home_forms/"
        );
        let response = await request.json();
        setJopValide( response );
      } catch ( error ) {
        console.log( error );
      }
    }
    getJopValide();
  }, [] );

  async function handleSelectOption( id ) {
    localStorage.setItem( 'numberForm', id );
    if ( id > 0 ) {
      try {
        let request = await fetch(
          `https://kog.pythonanywhere.com/api/v1/home/questions/?form=${id}`
        );
        let response = await request.json();
        setSelectQuestion( response );
        setSelectAnswers( {} );
      } catch ( error ) {
        console.log( error );
      }
    } else {
      setSelectQuestion( [] );
      setSelectAnswers( {} );
    }
  }

  async function getChoice( id ) {
    try {
      let request = await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/choices/?question=${id}`
      );
      let response = await request.json();
      return response;
    } catch ( error ) {
      console.log( error );
    }
  }

  useEffect( () => {
    if ( selectQuestion.length > 0 ) {
      const fetchChoices = async () => {
        const choices = {};
        for ( const question of selectQuestion ) {
          const response = await getChoice( question.id );
          choices[ question.id ] = response;
        }
        setSelectAnswers( choices );
      };
      fetchChoices();
    }
  }, [ selectQuestion ] );
  //////////////////////////////////////
//   const formRef = useRef();
// async function handleSubmit(e, form) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   formData.append("form", localStorage.getItem("numberForm"));

 
//   const bodyValue = form.querySelectorAll("[name='input']").value;
//   formData.append("body", bodyValue);

//   try {
//     const response = await fetch(
//       "https://kog.pythonanywhere.com/api/v1/home/responses/",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token_access")}`,
//         },
//         body: formData,
//       }
//     );
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }


    return (
      <>
        <Navbar />
        <EnglishAndArabic />
        <form
          action=""
          className={styles.Interview}
        >
          <div className="sendToBack">
            <div className={styles.one}>
              <label htmlFor="user">
                {direction === "EN" ? "userName" : "الاسم"}
              </label>
              <br />
              <input type="text" name="username" />
            </div>
            <div className={styles.one}>
              <label htmlFor="number">
                {direction === "EN" ? "Number" : "رقم الهاتف"}
              </label>
              <br />
              <input type="number" name="phonenumber" />
            </div>
            <div className={styles.one}>
              <label htmlFor="job">
                {direction === "EN" ? "Your Jop" : "الوظيفة"}{" "}
              </label>
              <br />
              <select
                name={direction === "EN" ? "jop" : "الوظيفة"}
                id=""
                onChange={(e) =>
                  handleSelectOption(
                    e.target.selectedOptions[0].getAttribute("data-id")
                  )
                }
              >
                <option data-id="0">choose Jop</option>
                {jopValide.map((jop, index) => (
                  <option key={index} value={jop.title} data-id={jop.id}>
                    {jop.title}
                  </option>
                ))}
              </select>
            </div>
            {selectQuestion.map((question, index) => (
              <div key={index} className={styles.two}>
                <h5 className={styles.h4}>
                  {index + 1}-{" "}
                  {direction === "EN" ? question.body_en : question.body_ar}
                </h5>
                {question.type === "text" && (
                  <textarea
                    name={
                      direction === "EN" ? question.body_en : question.body_ar
                    }
                    placeholder={
                      direction === "EN" ? "Enter Answer" : "ادخل الاجابة"
                    }
                  ></textarea>
                )}
                {question.type === "radio" && (
                  <>
                    {selectAnswers[question.id]?.map((answer, answerIndex) => (
                      <div key={answerIndex}>
                        <input
                          type="radio"
                          name={
                            direction === "EN"
                              ? question.body_en
                              : question.body_ar
                          }
                          value={
                            direction === "EN" ? answer.body_en : answer.body_ar
                          }
                        />
                        <label
                          htmlFor={`answer_${index}`}
                          className={styles.mr}
                        >
                          {direction === "EN" ? answer.body_en : answer.body_ar}
                        </label>
                        <br />
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>

          <button className="btn btn-secondary">
            {direction === "EN" ? "submit" : "تقديم"}
          </button>
        </form>
        <Footer />
      </>
    );
  }














     //   const jsonString =
      // "{\"username\":\"\",\"phonenumber\":\"\",\"\":\"Front End\",\"text_en\":\"\",\"text3\":\"\",\"answer_4\":\"second\",\"answer_5\":\"now\"}"
      //   const jsonObject = JSON.parse(jsonString);
      //   const arr = Object.entries(jsonObject);
      //   arr.forEach(([key, value]) => {
      //     console.log(`${key}: ${value}`);
      //   });
