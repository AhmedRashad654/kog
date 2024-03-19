import React, { useEffect, useState } from "react";
import style from "../../componantStyle/ServicesDashboard.module.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/Context";
import '../../componantStyle/last.css'
import ScrollReveal from "scrollreveal";
export default function ServicesDashboard() {
  const { getAllServicesDashboard, servicesDashboaed, direction } = useUser();
  const [ loading, setLoading ] = useState( false );
  const [ deletingID, setDeletingID ] = useState( false );
  ///////////////
  useEffect(() => {
    const scrollRevealOption = {
      distance: "100px",
      origin: "top",
      duration: 1000,
    };
    ScrollReveal().reveal("#ahmed", { ...scrollRevealOption });
  }, []);




  /////////////
  useEffect( () => {
    getAllServicesDashboard();
    
  }, [ getAllServicesDashboard ] )
  
  ///////////search by name//////////////
  // const collserv = useRef()
  // function searchByName(e) {
  //   const valueSearch = e.target.value;
  //   const filterServices = servicesDashboaed.filter(
  //     (servic) =>
  //       (servic.title_en && servic.title_en.includes(valueSearch)) ||
  //       (servic.title_ar && servic.title_ar.includes(valueSearch))
  //   );
  //   const resultServices = filterServices
  //     .map(
  //       (servic, index) =>
  //         `
  //           <div className="firstServices" key=${index}>
  //             <img src=${servic.image} alt="" />
  //             <h6> ${ servic.title_ar ||servic.title_en }</h6>
  //             <div className=${style.twobtn}>
  //               <button>حذف</button>
  //             </div>
  //           </div>
  //       `
  //     )
  //     .join("");
  //   collserv.current.innerHTML = resultServices;
  // }
  async function deleteServices( id ) {
    try {
          setLoading(true);
     setDeletingID(id);
     let request =  await fetch(
      `https://kog.pythonanywhere.com/api/v1/home/services/${id}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token_access")}`,
        },
      }
      );
       await request.json();
       setLoading(false);
       setDeletingID(null);
       getAllServicesDashboard();
    } catch ( error ) {
      console.log( error );
    }
 
  }
  return (
    <>
      <div className={style.ServicesDashboard}>
        <div className={style.headServicesDash} id="ahmed">
          <NavLink to="/dashboard/addservices" className="btn btn-success">
            أضافة جديد
          </NavLink>
          {/* <input
            type="text"
            placeholder="بحث باستخدام الاسم"
            className="form-control"
            // onChange={searchByName}
          /> */}
        </div>
        <div className={style.alltable} >
          {servicesDashboaed.map((servic, index) => (
            <div className={style.firstServices} key={index}>
              <img src={servic.image} alt="" />
              <h4 className="h6">
                {direction === "EN" ? servic.title_en : servic.title_ar}
              </h4>
              <p>
                {direction === "EN"
                  ? servic.description_en
                  : servic.description_ar}
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => deleteServices(servic.id)}
              >
                {" "}
                {loading && deletingID === servic.id ? (
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
    </>
  );
}
