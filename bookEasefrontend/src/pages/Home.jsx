import React from 'react'
import Navbar from '../comp/Navbar'
import Style from "../css/Home.module.css"
import BooksSection from '../comp/BooksSection'
import Cartbox from '../comp/Cartbox'
import { Navigate, useNavigate } from 'react-router-dom'



export default function Home({changeitem}) {
  let navigate=useNavigate()
  return (
    <div className={Style.Home}>
      <div className={Style.HeroSection}>
        <div className={Style.HeroShade}></div>
        <div className={Style.HeroContent}>
        <h1>Rent, Read, Return</h1>
          <p>Discover a world of books. Rent your favorite titles at affordable prices with no commitments.</p>
          <button onClick={()=>{navigate("/rent")}}>Start Reading</button>
        </div>
      </div>
      <BooksSection changeitem={changeitem}/>
      
    </div>
  )
}
