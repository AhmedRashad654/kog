/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useState } from "react";
import "../componantStyle/AutoPlay.css";
import { useUser } from "../context/Context";
function AutoPlay() {
  const [partner, setPartner] = useState([]);
  const { direction } = useUser();

  ///////////get partner /////////////
  useEffect(() => {
    async function getPartner() {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/partners/"
      );
      let response = await request.json();
      setPartner(response);
    }
    getPartner();
  }, []);
  return (
    <>
      <div className="allslick">
        <div className="title">
          <h3>{direction === "EN" ? "Clients" : "العملاء"}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            ipsam qui nesciunt eveniet minima illum!
          </p>
        </div>

        {/* // eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <marquee scrollamount="10">
          <div className="hj">
            {partner.map((par, index) => (
              <img key={index} src={par.image} alt="" />
            ))}
          </div>
        </marquee>
      </div>
    </>
  );
}

export default AutoPlay;
