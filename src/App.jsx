import './App.css'
import Routers from './router/Routers'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {
  const [id, setID] = useState('');
  const [popup, setPopup] = useState(false);
  
  return (
    <div className='app' onClick={()=>popup?setPopup(false):{}}>
      <Navbar id={id} popup={popup} setPopup={setPopup} />
      <Routers id={id} setID={setID} />
    </div>
  )
}

export default App