import React from 'react'
import {useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import { useState } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const [id, setID] = useState('');
  return (
    <div className='login'>
      <form className='form'>
        <label className='loginlabel' htmlFor="userid">Login</label>
        <input placeholder='Enter User Id' type="text" id='userid' value={id} onChange={(e)=>setID(e.target.value)} className='entry' />
        <input className='submit' onClick={()=>{navigate(`/user/${id}`)}} type="submit" value='submit' />
      </form>
    </div>
  )
}

export default Login