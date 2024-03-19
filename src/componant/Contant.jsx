/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import "../componantStyle/Contant.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contant() {
  const [ contact, setContact ] = useState( [] );
  //////////////////
  useEffect(() => {
    async function getAllContact() {
      try {
        let request = await fetch(
          "https://kog.pythonanywhere.com/api/v1/home/contacts/"
        );
        let response = await request.json();
        setContact( response );
      } catch (error) {
        console.log(error);
      }
    }
    getAllContact()
  });
  return (
    <div>
      <Navbar />
      <div className="allform">
        <div className="left">
          <div className="head">
            <p>SERVICES</p>
            <h3>Get in touch</h3>
          </div>
          <div className="bottom">
            {contact.map((con) => (
              <div className="email3">
                <p>
                  {con.subject}:<small>{con.body}</small>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="map_frame">
            
            {/* // eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Egypt%20asyut+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
