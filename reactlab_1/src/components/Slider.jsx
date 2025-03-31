import React, { useState, useEffect } from 'react';
import './slider.scss';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Slider = ({ allImageData }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex(prevIndex => (prevIndex < allImageData.length - 1 ? prevIndex + 1 : 0))
    }, 2000);
    return () => clearInterval(interval)
  }, [allImageData.length]);

  const nextBtn = () => {
    setImgIndex(prevIndex => (prevIndex < allImageData.length - 1 ? prevIndex + 1 : 0))
  };

  const previousBtn = () => {
    setImgIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : allImageData.length - 1))
  };

  return (
    <div className='slider_component'>
      <img className='slider_component_img' src={allImageData[imgIndex]} alt="img" />
      <div className='slider_component_button_wrapper'>
        <button className='previousBtn' onClick={previousBtn}><FaArrowCircleLeft /></button>
        <button className='nextBtn' onClick={nextBtn}><FaArrowCircleRight /></button>
      </div>
    </div>
  );
};

export default Slider;
