import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Services from './../pages/Services';
import Contact from './../pages/Contact';

const AppRouter = () => {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>;
};

export default AppRouter;
