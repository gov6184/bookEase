import { useEffect, useState } from 'react'

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
  useEffect(()=>{
  localStorage.removeItem("loginstatus")
  },[])
  const [count, setCount] = useState(0)
  let [cartshow,setcartshow]=useState("notshow")
  let [loginstatus,setloginstatus]=useState(false)
  let [cartdata,setcartdata]=useState([])
  const addToLocalStorage = (newItem) => {
    // Get existing data from localStorage (if any)
    let storedArray = JSON.parse(localStorage.getItem('cartdata'));

    // Check if data exists, otherwise initialize with empty array
    if (!storedArray) {
      storedArray = [];
    }

    // Add new item to the array
    storedArray.push(newItem);

    // Stringify the updated array and store in localStorage
    localStorage.setItem('cartdata', JSON.stringify(storedArray));
    const sstoredArray = JSON.parse(localStorage.getItem('cartdata'));
    if (sstoredArray) {
      setcartdata(sstoredArray);
    }
  };
  useEffect(()=>{
    let val=localStorage.getItem('loginstatus')
    if(val){
      setloginstatus(val)
    }
  },[])
const toaddloginstatus=(val)=>{
localStorage.setItem("loginstatus",val)
  setloginstatus(val)
}

  return (
    <div className='App'>
      
      <Navbar cartdata={cartdata} setloginstatus={toaddloginstatus} loginstatus={loginstatus}  cartshow={cartshow} setcartshow={setcartshow} />
      <Cartbox cc={setcartdata} cartdata={cartdata} setcartdata={addToLocalStorage} val={cartshow} data={"hiiiiiiiiiiiiiiiii"} />
      <Router cartdata={cartdata} setcartdata={addToLocalStorage}  loginstatus={loginstatus} setloginstatus={toaddloginstatus}/>
      
    

     
    </div>
  )
}

export default App
