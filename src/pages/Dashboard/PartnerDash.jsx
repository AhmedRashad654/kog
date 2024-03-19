import React, { useEffect, useState } from 'react'
import style from '../../componantStyle/PartnerDash.module.css'
import { useUser } from '../../context/Context';
import { NavLink } from 'react-router-dom';
export default function PartnerDash() {
  const { direction, allPartner, getAllPartner } = useUser();
  const [ loading, setLoading ] = useState( false );
  const [ deletingID, setDeletingID ] = useState( null );
 
  useEffect(() => {
    getAllPartner();
  }, [getAllPartner]);

  ////////////////function delete user //////////////////
  async function deletePartner(id) {
    try {
      setLoading(true);
      setDeletingID(id);
      await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/partners/${id}/`,
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
      getAllPartner();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={ style.PartnerDash }>
      
      <div className={style.headAllPartner}>
        <NavLink to="/dashboard/addpartner" className="btn btn-success">
          {direction === "EN" ? "Add New" : "أضافة جديد"}
        </NavLink>
        {/* <input
          type="text"
          placeholder={ `${direction==="EN"?"search By Name":"بحث باستخدام الاسم"}` }
          className="form-control"
          // onChange={searchByName}
        /> */}
      </div>
      <div className={style.collPartner}>
        {allPartner.map((partner, index) => (
          <div className={style.PartnerDiv} key={index}>
            <img src={partner.image} alt="" />
            <button
              className="btn btn-danger"
              onClick={() => deletePartner(partner.id)}
            >
              {loading && deletingID === partner.id ? (
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                <>{direction === "EN" ? "delete" : "حذف"}</>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
