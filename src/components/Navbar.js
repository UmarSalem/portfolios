import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full flex items-center justify-between py-4">
      <div>
        <span className="text-sky-500 text-base">M Umar Saleem</span>
      </div>
     
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {showMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      
      <div className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
        <Link to="/home" className="block md:inline-block mr-4 hover:bg-blue-300">Home</Link>
        <Link to="/contactus" className="block md:inline-block mr-4 hover:bg-blue-300">Contact Me</Link>
        <Link to="/services" className="block md:inline-block mr-4 hover:bg-blue-300">Services</Link>
      </div>
    </nav>
  );
}

export default Navbar;
