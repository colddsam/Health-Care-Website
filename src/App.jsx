import './App.css'
import Routers from './router/Routers'
import Navbar from './components/Navbar'
import { useState } from 'react'
const App = () => {
const [id, setID] = useState('');
  return (
    <div className='app'>
      <Navbar id={id} />
      <Routers id={id} setID={setID} />
    </div>
  )
}

export default App