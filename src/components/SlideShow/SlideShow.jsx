import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import './SlideShowStyle.css';

 const SlideShow = ({data}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((element,index) => {
        return (
            <>
          <img
            src={element.src}
            alt={element.alt}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
          <h1 className={slide === index ? "slide" : "slide slide-hidden"}>{element.alt}</h1>
          </>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
export default SlideShow