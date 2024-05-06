import React,{useState} from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { user } from '../assets/images/Image';

const Navbar = () => {

  const [popup,setPopup]=useState(false);

  let navItems = {
    'About': '/home',
    'Services': '/services',
    'Log In': '/login',
    'Register': '/register'
  };

  const popUpCheck = () => {
    popup ? setPopup(false) : setPopup(true);
  }

  return (
    <div className='navbar'>
      <div className="sectionf">
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
      <div className="sections">
        <div className="title">
          ROUBUSTA 6.0
        </div>
        <div className="outerbuttonsection">
          {
            popup?<ul className="profiledetails">
            {Object.entries(navItems).map(([text, link], index) => (
          <button key={index} className="item">
            <Link className='link' to={link}>{ text}</Link>
          </button>
        ))}
          </ul>:''
          }
              <button className='smallnav' onClick={popUpCheck}>
          <img src={user} alt="user"/>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
