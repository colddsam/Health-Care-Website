import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Services from '../pages/Services'
import User from '../pages/User'


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="home" />}></Route>
      <Route path='/home' element={<LandingPage/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/user/:id' element={<User/>}></Route>
    </Routes>
  )
}

export default Routers