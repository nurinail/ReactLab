import React from "react";
import styleHeader from "./header.module.scss";
import headerLogo from '../../assets/logo.svg';
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";



const Header = () => {
  return <div className={styleHeader.header_comp}>
    <button className={styleHeader.header_comp_logo}><img src={headerLogo} alt="Logo" /></button>
    <nav className={styleHeader.header_comp_nav}>
        <ul className={styleHeader.header_comp_nav_menu}>
            <li className={styleHeader.header_comp_nav_menu_item}>Home</li>
            <li className={styleHeader.header_comp_nav_menu_item}>About</li>
            <li className={styleHeader.header_comp_nav_menu_item}>Service</li>
            <li className={styleHeader.header_comp_nav_menu_item}>Contact</li>
        </ul>
    </nav>
    <div className={styleHeader.header_comp_socialMedia}>
        <button className={styleHeader.header_comp_socialMedia_item}><CiFacebook /></button>
        <button className={styleHeader.header_comp_socialMedia_item}><CiTwitter /></button>
        <button className={styleHeader.header_comp_socialMedia_item}><CiInstagram /></button>
        <button className={styleHeader.header_comp_socialMedia_item}><CiYoutube /></button>
    </div>

  </div>;
};

export default Header;
