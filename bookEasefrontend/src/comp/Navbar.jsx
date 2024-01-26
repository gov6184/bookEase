import React from 'react'
import Style from "../css/Navbar.module.css"
import { useNavigate } from 'react-router-dom'


export default function Navbar({setcartshow,cartshow}) {
  let navigate=useNavigate()
  return (
    <div className={Style.outerbox}>
        <div  className={Style.logobox}>
            <div onClick={()=>navigate("/")} className={Style.logoo}></div>
            <div onClick={()=>navigate("/")} className={`${Style.logoo} ${Style.name}`}></div>
        </div>
        <div className={Style.bookssection}>
            <h2 onClick={()=>{navigate("/rent")}}>Renting Books</h2>
            <h2>online Books</h2>
            
        </div>
        <div className={`${Style.bookssection} ${Style.loginsignupbtn}`}>
            <h2 onClick={()=>{navigate("/login")}}>Login</h2>
            <hr></hr>
            <h2 onClick={()=>{navigate("/Signup")}}>Signup</h2>
            
        </div>
        <img onClick={()=>{if(cartshow=="notshow"){setcartshow("show")}else{setcartshow("notshow")}}} className={Style.cartimg} src="https://img.icons8.com/pastel-glyph/100/shopping-cart--v2.png" alt="shopping-cart--v2"/>
    </div>
  )
}
