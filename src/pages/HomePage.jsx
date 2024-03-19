import React from "react";
import Navbar from "../componant/Navbar";
import Header from "../componant/Header";
import Services from "../componant/Services";
import AutoPlay from "../componant/AutoPlay";
import SliderAds from "../componant/SliderAds";
import Footer from "../componant/Footer";
// import EnglishAndArabic from "../componant/EnglishAndArabic";

export default function HomePage() {

  return (
    <div
     
    >
      
      <Navbar />
      <Header />
      <Services />
      <AutoPlay />
      <SliderAds />
      <Footer />
      {/* <EnglishAndArabic/> */}
    </div>
  );
}
