import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Renting from '../pages/Renting'
import Moreinfo from '../comp/Moreinfo'

export default function Router({setloginstatus,loginstatus,setcartdata}) {
  let [moreinfobook,setmoreinfobook]=useState("")
  return (
    <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login' element={<Login setloginstatus={setloginstatus}/>} />
        <Route path='/signup' element={<Signup setloginstatus={setloginstatus}/>} />
        <Route path='/Moreinfo' element={<Moreinfo setcartdata={setcartdata} loginstatus={loginstatus} item={moreinfobook}/>} />
        <Route path='/rent' element={<Renting setcartdata={setcartdata} loginstatus={loginstatus} changeitem={setmoreinfobook}/>} />
    </Routes>
  )
}
