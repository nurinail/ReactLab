import React from "react";
import style from "./about.module.scss"
import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return <div className={style.about}>
    <div className={style.about_link}>
      <NavLink className={style.about_link_item} to="employee">About as Employee</NavLink>
      <NavLink className={style.about_link_item} to="company">About as Company</NavLink>
    </div>
    <Outlet/>

  </div>;
};

export default About;
