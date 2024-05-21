// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-4">
      <div className="flex items-center space-x-6">
        <Link to="https://www.facebook.com/muhammadumar.saleem"><img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" /></Link>
        <Link to="https://www.linkedin.com/in/muhammad-umar-saleem-b41752292/"><img src="/images/linkedin.png" alt="LinkedIn" className="w-8 h-8" /></Link>
        <Link to="https://github.com/UmarSalem"><img src="/images/github.png" alt="GitHub" className="w-8 h-8" /></Link>
      </div>
      <div>
        <p className="ml-4">All rights reserved 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
