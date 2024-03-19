import React, { useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "../../componantStyle/JopsDash.module.css";
import { useUser } from "../../context/Context"
export default function JopsDash() {
  const navigate = useNavigate();
  const { direction, formAdmin, getFormAdmin,valueIdForm } = useUser();
  useEffect(() => {
    getFormAdmin();
  });
  return (
    <div className={style.allallall}>
      <div className={style.headJop}>
        <NavLink to="/dashboard/addjops" className="btn btn-secondary">
          {direction === "EN" ? "Add Jop" : " أضافة وظيفة"}
        </NavLink>
        {/* <input
          type="text"
          placeholder="بحث باستخدام الاسم"
          className="form-control"
          onChange={searchByName}
        /> */}
      </div>
      <div className={style.alltable}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>{direction === "EN" ? "Jop Name" : " اسم الوظيفة"}</th>
              <th>
                {direction === "EN" ? "created Date" : "    تاريخ الانشاء"}
              </th>
              <th>{direction === "EN" ? "valid_to" : "    تاريخ الانتهاء"}</th>
              <th>{direction === "EN" ? "Response User " : "     رد المستخدم "}</th>
            </tr>
          </thead>
          <tbody >
            {formAdmin.map((form, index) => (
              <tr key={index}>
                <td onClick={ () => { valueIdForm( form.id ); navigate( "/dashboard/jops/displayquestionform" ) } }>{form.id}</td>
                <td> {form.title}</td>
                <td>{form.created_at}</td>
                <td>{ form.valid_to }</td>
                <td><button className="btn btn-secondary" onClick={()=>navigate('/dashboard/jops/responseuser')}>{direction==="EN"?"Response user":"رد المستخدم" }</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
