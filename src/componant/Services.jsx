import React, { useState } from "react";
import "../componantStyle/Services.css";
import { useEffect } from "react";
import { useUser } from "../context/Context";
export default function Services() {
  const [ services, setServices ] = useState( [] )
  const {direction}=useUser()
  useEffect( () => {
    async function getAllServices() {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/services/"
      );
      let response = await request.json();
      setServices( response );
    }
    getAllServices()
  },[])
  return (
    <>
      <div className="allSerices" id="services">
        <div className="services">
          {services.map((servic, index) => (
            <div className="one" key={index}>
              <div className="contimg">
                <img src={servic.image} alt="imge" />
              </div>

              <h4 className="h6">
                {direction === "EN" ? servic.title_en : servic.title_ar}
              </h4>
              <p>
                {direction === "EN"
                  ? servic.description_en
                  : servic.description_ar}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
