import React from 'react'
import Style from "../css/Login.module.css"

export default function Login() {
  return (
    <div className={Style.loginbox}>
        <div className={Style.innerbox}> 
          <h2>Login</h2>
          <input placeholder='Phone No. Or Email'/>
          <input type='password' placeholder='password'/>
          <button className={Style.loginbth}>Login</button>
        </div>
        <div className={Style.overlay}></div>
    </div>
  )
}
