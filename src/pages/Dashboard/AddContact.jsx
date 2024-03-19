import React, { useState } from 'react'
import style from '../../componantStyle/AddContact.module.css'
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
export default function AddContact() {
    const [ addContact, setAddContact ] = useState();
    const [ errorListDashboard, setErrorListDashboard ] = useState( null );
    const [ errorBack, setErrorBack ] = useState( null );
    const [ loading, setLoading ] = useState( false );
    const navigate = useNavigate();
    /////////////function handle change////////////
      function handleChange(e) {
        setAddContact((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    }
    ////////////validation Joi////////////////
      function validationContactDashboard() {
        let schema = Joi.object({
          subject: Joi.string().required(),
          body: Joi.string().required(),
        });
        return schema.validate(addContact, { abortEarly: false });
    }
    /////////function Add Contact//////////////////
      async function handlesubmit(e) {
        e.preventDefault();
        let responseValidateContact = validationContactDashboard();
        if (responseValidateContact.error) {
          setErrorListDashboard([responseValidateContact.error.details]);
        } else {
            setErrorListDashboard( null );
            setErrorBack(null)
          try {
            setLoading(true);
            const response = await fetch(
              "https://kog.pythonanywhere.com/api/v1/home/contacts/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "token_access"
                  )}`,
                },
                body: JSON.stringify(addContact),
              }
            );
            const result = await response.json();
            setLoading(false);
            if (result.created_at) {
              navigate("/dashboard/contact");
            } else {
              setErrorBack(result);
            }
          } catch (error) {
            console.error(error);
          }
        }
    }
    console.log(errorBack);
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
              navigate("/dashboard/contact");
            }}
          >
            رجوع
          </button>
        </div>
        <div className={style.colladduser}>
          <div className={style.inp}>
            <label htmlFor="subject"> طريقة التواصل</label>
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              onChange={handleChange}
            />
            {errorBack?.subject && (
              <p className="error">{errorBack?.subject}</p>
            )}
          </div>
          <div className={style.inp}>
            <label htmlFor="body">القيمة</label>
            <br />
            <input type="text" id="body" name="body" onChange={handleChange} />
            {errorBack?.body && <p className="error">{errorBack?.body}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}
