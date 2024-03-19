import React, { useEffect} from "react";
import "../componantStyle/Header.css";
import ScrollReveal from "scrollreveal";
import { useUser } from "../context/Context";

export default function Header() {
  const {direction} = useUser()
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "top",
      duration: 1000,
    };
    ScrollReveal().reveal(".maintext h1", { ...scrollRevealOption });
    ScrollReveal().reveal(".maintext h2", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".maintext p", {
      ...scrollRevealOption,
      delay: 1000,
    });
  }, []);
  return (
    <div className="header">
      <div className="maintext">
        <h1>{direction === "EN" ? "Flexible Freight" : "شحن مرن"}</h1>
        <h2>{ direction === "EN"?"Services.":"خدمات"}</h2>
        <p>
          {direction==="EN"?  "Our transportation division offers reliable and efficient solutions  for all your transportation needs.":"يقدم قسم النقل لدينا خدمات موثوقة لجميع خدمات النقل الخاصة بك"}
        
        </p>
      </div>
    </div>
  );
}
