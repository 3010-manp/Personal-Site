import React, {useState} from 'react';
import './navbar.css';
import {Link} from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 50)
        {
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to={"/"}>
            <h1 style={click || color ? {color: "white"} : {color: "#1B2631"}}>Personal Website</h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to={"/"} style={ color || click ? {color: "white"} : {color: "#1B2631"}} >Home</Link>
            </li>
            <li>
                <Link to={"/project"} style={ color || click ? {color: "white"} : {color: "#1B2631"}}>Projects</Link>
            </li>
            <li>
                <Link to={"/skills"} style={ color || click ? {color: "white"} : {color: "#1B2631"}}>Skills</Link>
            </li>
            <li>
                <Link to={"/about"} style={ color || click ? {color: "white"} : {color: "#1B2631"}}>About</Link>
            </li>
            <li>
                <Link to={"/contact"} style={ color || click ? {color: "white"} : {color: "#1B2631"}}>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "white"}} />) : (<FaBars size={20} style={color ? {color: "white"} : {color: "#1B2631"}} />)}  
        </div>
    </div>
  )
}

export default Navbar;