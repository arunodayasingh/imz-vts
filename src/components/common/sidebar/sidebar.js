import React, { useState } from 'react';
import "../../../App.css";
import { FaTh,FaBars,FaUserAlt,FaRef,FaAngleRight,FaAngleLeft,FaArrowCircleRight,FaArrowCircleLeft, FaCommentAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {

  const [isOpen,setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [ 
    {
      path:"/",
      name: "Dashboard",
      icon: <FaTh/>
    },
    {
      path:"/about",
      name: "About",
      icon: <FaUserAlt/>
    },

    {
      path:"/comment",
      name: "Comment",
      icon: <FaCommentAlt/>
    }

  ]
  return (
    <div className='Container'>
     <div style={{width: isOpen? "300px": "60px",transition:"all 0.2s"}} className='sidebar'>
        <div className='top-section'>
          <h1 style={{display: isOpen? "block": "none"}} className='logo'>Logo </h1>
          <div style={{marginLeft: isOpen? "100px": "0px"}} className='bars'>
            {isOpen ? <FaAngleRight onClick={toggle}/> :  <FaAngleLeft onClick={toggle}/> }
            {/* {isOpen ? <FaArrowCircleRight onClick={toggle}/> :  <FaArrowCircleLeft onClick={toggle}/> } */}
          </div>
        </div>

        {
          menuItem.map((menu,index) =>(
            <NavLink to={menu.path} key={index} className="link" activeclassName="active">
              <div className='icon'>{menu.icon}</div>
              <div  style={{display: isOpen? "block": "none"}} className='link-text'>{menu.name}</div>
            </NavLink>
          ))
        }

     </div>
        <main>
          {children}
        </main>

    </div>
  )
}

export default Sidebar; 