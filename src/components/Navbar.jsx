import React,{useState} from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { userImg } from '../assets/images/Image';

const Navbar = ({id}) => {

  const [popup, setPopup] = useState(false);
  const [display, setDisplay] = useState(false);

  const navItems = id===''?{
    'About': '/home',
    'Services': '/services',
    'Log In': '/login',
    'Register': '/register'
  } : {
    'About': '/home',
    'Services': '/services',
    'Profile': `/user/${id}`,
    'Log Out': '/login'
  };

  const popUpCheck = () => {
    popup ? setPopup(false) : setPopup(true);
    if (!display) {
      setDisplay(true);
    }
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
          
            <ul style={display?{display:'flex'}:{}} className={`profiledetails ${popup?"slide-in-right":"slide-out-right"}`}>
            {Object.entries(navItems).map(([text, link], index) => (
          <button key={index} className="item">
            <Link className='link' to={link}>{ text}</Link>
          </button>
        ))}
          </ul>
              <button className='smallnav' onClick={popUpCheck}>
          <img src={userImg} alt="user"/>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
