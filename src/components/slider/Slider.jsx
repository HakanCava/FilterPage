import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { photos } from "./imgData";
import './slider.css'

const Slider = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < photos.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="container">
      <div
        className=" slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {photos.map((photo) => (
          <div className="imgContainer" key={photo.id}>
            <img src={photo.image} alt="" />
          </div>
        ))}
      </div>
      <KeyboardArrowLeftIcon className="arrow left" onClick={() => handleClick("left")}/>
      <KeyboardArrowRightIcon className="arrow right" onClick={() => handleClick()}/>
    </div>
  );
};

export default Slider;
