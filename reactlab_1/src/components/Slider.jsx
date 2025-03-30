import React, { useState } from 'react';
import './slider.scss';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Slider = ({allImageData}) => {
  const [imgIndex,setImgIndex]=useState(0);

  const nextBtn=()=>{
    if(imgIndex<allImageData.length-1){
      setImgIndex(prev=>prev+1)
    }else{
      setImgIndex(0)
    }
  }
  const previousBtn=()=>{
    if(imgIndex<=0){
      setImgIndex(allImageData.length-1)
    }else{
      setImgIndex(prev=>prev-1)
    }
  }



  return (
    <div className='slider_component'>
      <img className='slider_component_img' src={allImageData[imgIndex]} alt="img" />
      <div className='slider_component_button_wrapper'>
        <button className='previousBtn' onClick={previousBtn}><FaArrowCircleLeft /></button>
        <button className='nextBtn' onClick={nextBtn}><FaArrowCircleRight /></button>

      </div>
    </div>
  )
}

export default Slider
