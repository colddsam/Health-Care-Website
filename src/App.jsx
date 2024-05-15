import './App.css'
import Routers from './router/Routers'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [id, setID] = useState('');
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
        setID(localStorage.getItem('user'));

        navigate(`/user/${localStorage.getItem('user')}`);
    }
  },[navigate])
  return (
    <div className='app' onClick={()=>popup?setPopup(false):{}}>
      <Navbar id={id} popup={popup} setPopup={setPopup} />
      <Routers id={id} setID={setID} />
    </div>
  )
}

export default App