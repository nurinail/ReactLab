import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from '../pages/Service/Services';
import Contact from '../pages/Contact/Contact';
import EmployeeAbout from "../pages/About/EmployeeAbout";
import CompanyAbout from "../pages/About/CompanyAbout";
import ToDoList from "./ToDoList/ToDoList";

const AppRouter = () => {
  return <Routes>
    <Route path="/" element={<Home/>}>
       <Route path="todolist" element={<ToDoList/>}/>
    </Route>
    <Route path="/about" element={<About/>}>
       <Route path="employee" element={<EmployeeAbout/>}/>
       <Route path="company" element={<CompanyAbout/>}/>
    <Route/>
    </Route>
    <Route path="/service" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>;
};

export default AppRouter;
