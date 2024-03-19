import React from "react";
import style from "../../componantStyle/DetailsJop.module.css";
import { useNavigate } from "react-router-dom";
export default function DetailsJap() {
    const navigate = useNavigate();
  return (
    <>
      <div className={ style.DetailsJap }
  
      >
        <p>
          اسم الوظيفة :<span> فرونت اند</span>
        </p>
        <p>
          تاريخ الانشاء : <span>1/1/2001</span>
        </p>
        <div className={style.alltable}>
          <table>
            <tbody>
              <tr>
                <th>id</th>
                <th>تاريخ الانشاء</th>
                <th> اسم الموظف</th>
              </tr>
              <tr>
                <td
                  onClick={() =>
                    navigate("/dashboard/jops/detailsjop/responseuser")
                  }
                >
                  1
                </td>
                <td>1/1/2001</td>
                <td> احمد محمد</td>
              </tr>
            </tbody>
          </table>

       
      
        </div>
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
    </>
  );
}
