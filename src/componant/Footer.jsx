import React from "react";
import "../componantStyle/Footer.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EnglishAndArabic from "./EnglishAndArabic";
export default function Footer() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "left",
      duration: 1000,
    };
    ScrollReveal().reveal(".colllastfooter", { ...scrollRevealOption });

    ScrollReveal().reveal(".colllastfooter1", {
      ...scrollRevealOption,
      delay: 1000,
    });
 

    const scrollRevealOption2 = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    ScrollReveal().reveal(".foorlast p", { ...scrollRevealOption2 });
    ScrollReveal().reveal(".iconEnglish", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".secondthree", {
      ...scrollRevealOption,
      delay: 800,
    });
  }, []);
  return (
    <div className="collfooter">
      <div className="footer">
        <div className="top">
          <div className="text">
            <h1>Looking for</h1>
            <h2>collaboration</h2>
          </div>
        </div>
        <div className="second">
          <div className="colllastfooter">
            <div className="secondtwo">
              <h4>company</h4>
              <div className="colltwo">
                <div className="email">
                  <FontAwesomeIcon icon={faAt} className="email1" />

                  <p>
                    Mail:<small>info@liquid.com</small>
                  </p>
                </div>
                <div className="call">
                  <FontAwesomeIcon icon={faPhone} className="call1" />
                  <p>
                    Call:<small>+(123) 567 8901</small>{" "}
                  </p>
                </div>
                <div className="location">
                  <FontAwesomeIcon icon={faLocationDot} className="location1" />
                  <p>Visit</p>
                </div>
              </div>
            </div>
            <div className="secondthree">
              <h4>Services</h4>
              <div className="collthree">
                <p>bussnies consulation</p>
                <p>Growth plan</p>
                <p>RD Service plan</p>
                <p>Startup Investment</p>
              </div>
            </div>
          </div>
          <div className="colllastfooter1">
            <div className="secondfour">
              <h4>platform</h4>
              <div className="collfive">
                <p>About US</p>
                <p>Services</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="secondfive">
              <h4>Resources</h4>
              <div className="collthree">
                <p>careers</p>
                <p>Customer Portal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="foorlast">
          <p>
            These Terms will be applied fully and affect to your use of this
            Website. By using this Website, you agreed to accept all terms and
            conditions written in here. You must not use this Website if you
            disagree with any of these Website Standard Terms and Conditions.
          </p>
          <div className="iconEnglish">
            <EnglishAndArabic />
          </div>
        </div>
      </div>
    </div>
  );
}
