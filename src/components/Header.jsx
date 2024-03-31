import React from 'react';
import webLogo from "../assets/web-logo.webp";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <div className="website-logo pt-8 flex justify-center">
           <Link to="/"><img src={webLogo} alt="Uranus Logo" className="w-[25vw] lg:w-[9vw] lg:mx-[200px] mx-6" /></Link>
        </div>
    </div>
  )
}

export default Header
