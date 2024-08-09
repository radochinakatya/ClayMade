import React from 'react';
import LeftArrowIcon from "../../../img/MainPage/SliderLeftArrow.svg";
import RightArrowIcon from "../../../img/MainPage/SliderRightArrow.svg";
import * as Styled from "./StyleSliderArrows.jsx";

const SliderArrows = ({ onNext, onPrev }) => {
  return (
    <>
      <Styled.LeftSliderArrow onClick={onPrev}>
        <img src={LeftArrowIcon} alt="left"></img>
      </Styled.LeftSliderArrow>
      <Styled.RightSliderArrow onClick={onNext}>
        <img src={RightArrowIcon} alt="right"></img>
      </Styled.RightSliderArrow>
    </>
  );
};

export { SliderArrows };