import React, { useState, useEffect } from "react";
import "../componantStyle/SliderAds.css";
import { useUser } from "../context/Context";


function SliderAds() {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);
  const {direction} = useUser()
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  useEffect( () => {
   async function getAllSlider() {
    let request = await fetch(
      "https://kog.pythonanywhere.com/api/v1/home/sliders"
     );
     let response = await request.json();
     setPeople( response );
    }
    getAllSlider();
})
  return (
    <section className="section">
      <div className="title">
        <h2>{ direction === "EN"?"advertisements":"الاعلانات"}</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name , text_ar,text_en} = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{direction === "EN"?text_en:text_ar }</h4>
            </article>
          );
        })}
 
      </div>
    </section>
  );
}

export default SliderAds;
