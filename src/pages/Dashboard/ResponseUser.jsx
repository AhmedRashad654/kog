import React, { useEffect } from 'react'
import style from '../../componantStyle/ResponseUser.module.css'
import { useNavigate } from 'react-router-dom';
export default function ResponseUser() {
  const navigate = useNavigate();
  useEffect( () => {
    async function getResponse() {
          try {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/responses/?form=5"
            );
            let response = await request.json();
            console.log( response );
    } catch ( error ) {
      console.log(error)
    }
    }
getResponse()
  },[])
    return (
      <>
        <div className={style.ResponseUser}>
          <p>رد المستخدم علي الاسئلة</p>
          <div className={style.response}>
            <p>
              السؤال : <span>عدد سنين الخبرة لديك</span>
            </p>
            <p>
              الاجابة : <span> سنتين</span>
            </p>
          </div>
          <div className={style.response}>
            <p>
              السؤال : <span>عدد سنين الخبرة لديك</span>
            </p>
            <p>
              الاجابة : <span> سنتين</span>
            </p>
          </div>
          <div className={style.response}>
            <p>
              السؤال : <span>عدد سنين الخبرة لديك</span>
            </p>
            <p>
              الاجابة : <span> سنتين</span>
            </p>
          </div>
          <div className={style.response}>
            <p>
              السؤال : <span>عدد سنين الخبرة لديك</span>
            </p>
            <p>
              الاجابة : <span> سنتين</span>
            </p>
          </div>
          
          <button
            to="/dashboard/addjops"
            className={style.add}
            onClick={() => {
              navigate(-1);
            }}
          >
            رجوع
          </button>
        </div>
      </>
    );
}
