import React, { useEffect, useRef, useState } from 'react'
import style from '../../componantStyle/DisplayQuestionAdmin.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/Context';
export default function DisplayQuestionAdmin() {
    const trName = useRef();
    const [ questionAdmin, setQuestionAdmin ] = useState( [] );
  const { direction, noForm,addchoice } = useUser()
  const navigate = useNavigate();
    useEffect( () => {
        async function getAllQuestion() {
           let request = await fetch(
             `https://kog.pythonanywhere.com/api/v1/home/questions/?form=${noForm}`
            ); 
            let response = await request.json();
            setQuestionAdmin( response );
        }
        getAllQuestion();
    },[noForm])
  return (
    <div className={style.allallall}>
      <div className={style.alltable} id="ahmed">
        <div className={style.headAllTable}>
          <NavLink
            to="/dashboard/jops/addquetions"
            className="btn btn-secondary"
          >
            أضافة جديد
          </NavLink>
          {/* <input
            type="text"
            placeholder="بحث باستخدام الاسم"
            className="form-control"
            // onChange={searchByName}
          /> */}
        </div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>النوع</th>
              <th> {direction === "EN" ? "question" : "السؤال"}</th>
              <th>اضافة اجابة</th>
            </tr>
          </thead>
          <tbody ref={trName}>
            {questionAdmin &&
              questionAdmin.map((question, index) => (
                <tr key={index}>
                  <td>{question.id}</td>
                  <td>{question.type}</td>
                  <td>
                    {direction === "EN" ? question.body_en : question.body_ar}
                  </td>
                  <td>
                    {question.type === "radio" ? (
                      <button
                        className="btn btn-success"
                        onClick={ () => { addchoice( question.id ); navigate( "/dashboard/jops/displayquestionform/addchoice" ) }
                        }
                      >
                        Add Choice{" "}
                      </button>
                    ) : (
                      ""
                    )}{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
