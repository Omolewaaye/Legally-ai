import React, { useState } from 'react'
import { HiOutlineBars } from 'react-icons/hi2'
import { IoPauseOutline } from 'react-icons/io5'

import "./NavBar.css"



const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <div>
         <div className='nav'>
        <div className='Nav-wrapper'></div>
      <IoPauseOutline/>
        Legally AI

        <div className='Search'>
          <input type="search" placeholder='' />
          <div className='Button'>
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </div>
        <hr />  
        <div onClick="handleClick" className='Menu-outline' >
          <span> <ion-icon name="menu-outline"></ion-icon>

          </span>
        </div>

 
      <ul className='Nav-list'>
              <a href="">Home</a>  
             <a href="">About Us</a> 
            <a href="">Contact Us</a> 
            <a href="">Services</a> 
            <a href="">Blog</a> 
            <a href="">Meet a Lawyer </a> 
           
           </ul> 

        {/* <div className='Menu'>
          <span><ion-icon name="menu-outline"></ion-icon>
           
          </span>
           </div> */}

        {/* <div className='Button'> */}
        {/* <div  className='Search'>
            <input type="search" placeholder='' />
            <div className='Button'>
            <button>Log in</button>
            <button>Sign up</button>
            </div>
            </div> */}




      </div>


          
    </div>
  )
}

export default Navbar;

