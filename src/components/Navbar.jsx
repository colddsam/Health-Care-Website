import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = {
    'About': '/home',
    'Services': '/services',
    'Log In': '/login',
    'Register': '/register'
  };

  return (
    <div className='navbar'>
      <div className="title">
        ROUBUSTA 6.0
      </div>
      <ul className="items">
        {Object.entries(navItems).map(([text, link], index) => (
          <button key={index} className="item">
            <Link className='link' to={link}>{ text}</Link>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
