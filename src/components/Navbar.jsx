import '../styles/navbar.css'

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {FaBars,FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'; // Import the image

export default function Navbar(){
     
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor]=useState(false)
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true)
        }else{
           setColor(false)
        }
    }

  window.addEventListener("scroll", changeColor);
    return(
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" >
            <img src={logo} alt="Logo" style={{ width: '200px', height: '70px' }}/>
           </Link>
           

        <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/solutions">SOLUTIONS</Link>
            </li>
            
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>

            <li>
                <Link to="/contact" className="btn">REQUEST A DEMO</Link>
            </li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
            {click? (<FaTimes  size={20} />):
              (<FaBars  size={20}/>)
              }
        </div>

        </div>
    )
}