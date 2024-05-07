import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PopUp from '../components/PopUp';

import '../styles/Login.css';

const apiUrl = process.env.REACT_APP_API_KEY;

const Login = ({ setID }) => {
  setID('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [logID, setLogID] = useState('');

  const profileLogIn = async () => {
    setLoading(true);
    try {
      const userResponse = await axios.get(`${apiUrl}/find/?_id=${logID}`);
      console.log("User Data:", userResponse.data);
      setLoading(false);
      if (userResponse.data) {
        setID(logID);
        navigate(`/user/${logID}`);
      } else {
        console.log("No user data found.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching user data:", error);
    }
  }

  return (
    
    <div className='login'>
        {loading && <PopUp />} 
      <form className='form' onSubmit={(e) => { e.preventDefault(); profileLogIn(); }}>
        <label className='loginlabel' htmlFor="userid">Login</label>
        <input placeholder='Enter User Id' type="text" id='userid' value={logID} onChange={(e) => setLogID(e.target.value)} className='entry' />
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
