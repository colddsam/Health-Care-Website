import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/User.css'
const User = () => {
    const {id}=useParams();
  return (
      <div className='user'>{ id}</div>
  )
}

export default User