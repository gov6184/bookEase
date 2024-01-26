import React from 'react'
import Style from "../css/Signup.module.css"

export default function Signup() {
  return (
    <div className={Style.signupbox}>
      <div className={Style.innerbox}>
          <h2>SignUp</h2>
          <input placeholder='Email'/>
          <input placeholder='Phone No.' />
          <input type='password' placeholder='password'/>
          <button className={Style.loginbth}>SignUp</button>
      </div>
      <div className={Style.overlay}>hii</div>
    </div>
  )
}
