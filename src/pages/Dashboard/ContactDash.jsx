import React, { useEffect, useRef, useState } from "react";
import style from "../../componantStyle/Contact.module.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/Context";

export default function ContactDash() {
  const trName = useRef();
    const { contact, getAllContact ,direction} = useUser();
    const [ loading, setLoading ] = useState( false )
    const [ deletingID, setDeletingID ] = useState( null );
  useEffect(() => {
    getAllContact();
  }, [getAllContact]);
  ////////////////function delete contact //////////////////
  async function deleteContact(id) {
    try {
      setLoading(true);
      setDeletingID(id);
      await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/contacts/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        }
      );
      setLoading(false);
      setDeletingID(null);
      getAllContact();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={style.ContactDash}>
      <div className={style.headAllContact}>
        <NavLink to="/dashboard/addcontact" className="btn btn-success">
          أضافة جديد
        </NavLink>
        {/* <input
          type="text"
          placeholder="بحث باستخدام الاسم"
          className="form-control"
          //   onChange={searchByName}
        /> */}
      </div>
      <table>
        <thead>
          <tr>
            <th>طريقة التواصل</th>
            <th>القيمة</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody ref={trName}>
          {contact.map((con, index) => (
            <tr key={index}>
              <td>{con.subject}</td>
              <td>{con.body}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteContact(con.id)}
                >
                  {loading && deletingID === con.id ? (
                    <div
                      className="spinner-border text-secondary"
                      role="status"
                    >
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <>{direction === "EN" ? "delete" : "حذف"}</>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
