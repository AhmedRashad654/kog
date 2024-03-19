import React, {  useState } from "react";
import Joi from "joi";
export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState({});
  const [successChange, setSuccessChange] = useState(null);
  const [errorBack, setErrorBack] = useState(null);
    const [ errorListChange, setErrorListChange ] = useState( null );
    const [ noLogin, setNoLogin ] = useState( null );
  function handleChange(e) {
    setChange((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  /////////////function validation change password///////////////////
  function validateChangePassword() {
    let Schema = Joi.object({
      old_password: Joi.string().required(),

      new_password: Joi.string().required(),
    });
    return Schema.validate(change, { abortEarly: true });
  }
    /////////////function submit change password///////////////////
   
  async function changePassword(e) {
      e.preventDefault();
            setErrorListChange(null);
      
    let responseValidateChangePassword = validateChangePassword();
    if (responseValidateChangePassword.error) {
      setErrorListChange(responseValidateChangePassword.error.details[0].message);
    } else {
      const storeTokenAccess = localStorage.getItem("token_access");
      const storeTokenRefresh = localStorage.getItem("token_refresh");
        if ( ( storeTokenAccess, storeTokenRefresh ) ) {
            setLoading( true );
            setErrorBack( null );
            setSuccessChange(null)
            const response = await fetch(
              "https://kog.pythonanywhere.com/api/v1/accounts/change-password/",
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${storeTokenAccess}`,
                },
                body: JSON.stringify(change),
              }
            );
            let result = await response.json();
            setLoading(false)
            console.log(result);
            if (result.status === "success") {
              setSuccessChange(result.message);
            } else {
              setErrorBack(result);
            }
      } else {
        setNoLogin('you not login')
      }
  
        
    }
  }

  return (
    <form className="formLogin" onSubmit={changePassword}>
      {noLogin && <p className="alert alert-danger">{noLogin}</p>}
      {errorListChange && (
        <p className="alert alert-danger">{errorListChange}</p>
      )}
      {successChange && <p className="alert bg-success">{successChange}</p>}
      {errorBack?.new_password && (
        <p className="alert alert-danger">{errorBack?.new_password[0]}</p>
      )}

      {errorBack?.old_password && (
        <p className="alert alert-danger">{errorBack?.old_password}</p>
      )}

      <div className="inp">
        <label htmlFor="old_password">old-password</label>
        <br />
        <input
          type="password"
          name="old_password"
          id="old_password"
          onChange={handleChange}
        />
      </div>
      <div className="inp">
        <label htmlFor="password">New-password</label>
        <br />
        <input
          type="password"
          name="new_password"
          id="new_password"
          onChange={handleChange}
        />
      </div>
      <div className="inp">
        <button className="btn btn-secondary">
          {loading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "changePassword"
          )}
        </button>
      </div>
    </form>
  );
}
