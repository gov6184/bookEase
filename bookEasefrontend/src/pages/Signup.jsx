import React, { useState } from 'react'
import Style from "../css/Signup.module.css"
import axios from 'axios'
export default function Signup() {
  
  let [password,setpassword]=useState("")
  let [email,setemail]=useState("")
  let [phone_no,setphone_no]=useState("")
  let newuser=async()=>{
    function generateRandomUniqueBookID() {
            
      const length = 16;
      const format = 'alphanumeric';
    
    
      let randomString = "";
      for (let i = 0; i < length; i++) {
        const charCode = Math.floor(Math.random() * 36) + 65; // A-Z (0-9 omitted)
        randomString += String.fromCharCode(charCode);
      }
    
      const usedIDs = new Set(); // Store generated IDs in a set
      while (usedIDs.has(randomString)) {
        randomString = generateRandomUniqueBookID(); // Regenerate if duplicate
      }
      usedIDs.add(randomString);
    
      return randomString;
    }
    let obj={
      userid:`${generateRandomUniqueBookID()}`,
      password,
      email,
      phone_no
    }
    console.log(obj)
    
   await axios.post("http://localhost:8080/users/create", obj).then(res=>{console.log(res.data)})
  }
  return (
    <div className={Style.signupbox}>
      <form onSubmit={newuser} className={Style.innerbox}>
          <h2>SignUp</h2>
          <input onChange={(e)=>{setemail(e.target.value)}} type='email' placeholder='Email' required/>
          <input onChange={(e)=>{setphone_no(e.target.value)}} type='number' placeholder='Phone No.'  required />
          <input onChange={(e)=>{setpassword(e.target.value)}} type='password' required placeholder='password'/>
          <button  className={Style.loginbth}>SignUp</button>
      </form>
      <div className={Style.overlay}>hii</div>
    </div>
  )
}
