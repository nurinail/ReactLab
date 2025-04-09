import React from "react";
import styleHeader from "./header.module.scss";
import headerLogo from '../../assets/logo.svg';
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { NavLink } from "react-router-dom";



const Header = () => {
  return <div className={styleHeader.header_comp}>
    <NavLink className={styleHeader.header_comp_logo} to="/"><img src={headerLogo} alt="Logo" /></NavLink>
    <nav className={styleHeader.header_comp_nav}>
        <ul className={styleHeader.header_comp_nav_menu}>
            <li className={styleHeader.header_comp_nav_menu_item}><NavLink to="/">Home</NavLink></li>
            <li className={styleHeader.header_comp_nav_menu_item}><NavLink to="/about">About</NavLink></li>
            <li className={styleHeader.header_comp_nav_menu_item}><NavLink to="service">Service</NavLink></li>
            <li className={styleHeader.header_comp_nav_menu_item}><NavLink to="contact">Contact</NavLink></li>
        </ul>
    </nav>
    <div className={styleHeader.header_comp_socialMedia}>
        <NavLink className={styleHeader.header_comp_socialMedia_item}><CiFacebook /></NavLink>
        <NavLink className={styleHeader.header_comp_socialMedia_item}><CiTwitter /></NavLink>
        <NavLink className={styleHeader.header_comp_socialMedia_item}><CiInstagram /></NavLink>
        <NavLink className={styleHeader.header_comp_socialMedia_item}><CiYoutube /></NavLink>
    </div>

  </div>;
};

export default Header;
