import React, { useState } from 'react'
import "./home.scss";
import Slider from '../components/Slider'
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';
import img3 from '../images/img3.svg';
import img4 from '../images/img4.svg';
import img5 from '../images/img5.svg';
import img6 from '../images/img6.svg';
import img7 from '../images/img7.svg';
import img8 from '../images/img8.svg';
import img9 from '../images/img9.svg';
import img10 from '../images/img10.svg';


const Home = () => {
    let allImageData=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
  return (
    <div className='homeComponent'>
        <Slider allImageData={allImageData}/>
        
      
    </div>
  )
}

export default Home
