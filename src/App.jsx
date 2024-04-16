import React from 'react'
import './App.css'
import Routers from './router/Routers'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routers/>
    </div>
  )
}

export default App