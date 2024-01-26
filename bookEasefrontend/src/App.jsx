import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './comp/Navbar'
import Signup from './pages/Signup'
import Router from './Routers/Router'
import Cartbox from './comp/Cartbox'
import Footer from './comp/Footer'


function App() {
  const [count, setCount] = useState(0)
  let [cartshow,setcartshow]=useState("notshow")
  return (
    <div className='App'>
      
      <Navbar cartshow={cartshow} setcartshow={setcartshow} />
      <Cartbox val={cartshow} data={"hiiiiiiiiiiiiiiiii"} />
      <Router/>
      
    

     
    </div>
  )
}

export default App
