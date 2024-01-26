import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Renting from '../pages/Renting'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        
        <Route path='/rent' element={<Renting/>} />
    </Routes>
  )
}
