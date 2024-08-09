import React, { useState, useEffect } from "react";
import FirstPic from "../../../img/MainPage/SliderPic1.png";
import SecondPic from "../../../img/MainPage/SliderPic2.png";
import ThirdPic from "../../../img/MainPage/SliderPic3.png";
import { SliderArrows } from "./SliderArrows";
import * as Styled from "./StyleSlider.jsx";

const Slider = () => {
 const images = [FirstPic, SecondPic, ThirdPic];
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval); // Очищаем интервал 
 });

 const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
 };

 const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
 };

 return (
    <Styled.SliderBlock>
      <Styled.SliderPics>
        {images.map((image, index) => (
          <Styled.SliderImage
            key={index}
            src={image}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}
        <SliderArrows onNext={nextImage} onPrev={prevImage} />
      </Styled.SliderPics>
    </Styled.SliderBlock>
 );
};

export { Slider };
