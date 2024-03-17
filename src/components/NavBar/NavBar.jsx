import React, { useEffect } from 'react'
import './NavBarStyle.css';
import { FaCalendar } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import RoundButton from '../RoundButton/RoundButton';
import { FiAlignJustify } from "react-icons/fi";


const NavBar = ({logo,navItems,btn}) => {
  return (
  <nav>
<h1>{logo}</h1>
<div className="items" id ="my-items">
    <ul>
       {navItems.map((element,index)=>{return(
       <li key={index}><NavLink to={element.path} className={({isActive})=>isActive ?"active": ""}>{element.content}</NavLink></li>)}
       )}
    </ul>
    <RoundButton icon={true} btn="Schedule a visit"/>
    </div>
  



  </nav>
  )
}

export default NavBar