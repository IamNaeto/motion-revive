import React, { useContext, useState } from 'react'
import "./Navigation.css";
import { MdDashboard, MdDirectionsWalk, 
  MdWc, MdSwapHoriz, MdOutlineAccessibilityNew, MdSupportAgent, MdLogout } from "react-icons/md";
  
import { FiChevronLeft } from "react-icons/fi";
import Logo from "../../assets/logo.png"
import Nav from '../navIcon/Nav.jsx';
import { ThemeContext } from '../../ThemeContext.js';



const Navigation = () => {
  const [nav, setNav]= useState(false)

  const {DarkTheme, setDarkTheme} = useContext(ThemeContext)

  function changeTheme () {
    setDarkTheme(!DarkTheme);
  }
 
  return (
    <div className={`navigation ${nav && 'active'} ${DarkTheme && 'dark'}`}>
      
       <div className={`menu ${nav && 'active'}`} onClick={()=>{
        setNav((prevState)=> !prevState)
       }}>
        <FiChevronLeft className="menu-icon" />
      </div>
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" className='logo-img' />
        </div>
      </header>
      
      
      <div className='top-item'>
      <Nav Icon={MdDashboard}  title="Dashboard" />
      <Nav Icon={MdOutlineAccessibilityNew} title={"Exercise Hub"} />
      <Nav Icon={MdWc} title={"Community"} />
      </div>
     
      <div className='middle-item'>
       <Nav Icon={MdSwapHoriz} title={`${DarkTheme ? "Lightmode" : "Darkmode" }`} onClick={changeTheme}/>

      </div>

      <div className='bottom-item'>
      <Nav Icon={MdSupportAgent} title={"Support"} />
      <Nav Icon={MdLogout} title={"Logout"} />
      </div>
     
    </div>
  )
}

export default Navigation