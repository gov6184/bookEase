import React, { useState } from 'react'
import Style from "../css/Login.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login({setloginstatus}) {
  let [email,setemail]=useState("")
  let [password,setpassword]=useState("")
  let nevigate=useNavigate()
  let funn=async()=>{
    if(email=="" || password==""){
      alert("Please fill all the fields")
      return
    }
    let obj={
      email:email,
      password:password
    }
    await axios.post("http://localhost:8080/users/login", obj).then(res=>{
      if(res.data=="user not found"){
        alert("no user present with that email please signup")
        return 
      }
      if(res.data[0].email==email && res.data[0].password==password){
        alert("login successful")
        setloginstatus(true)
        nevigate("/rent")
      }else{
        alert("wrong credentials")

      }
    console.log(res.data)
   })
  }
  return (
    <div className={Style.loginbox}>
        <div className={Style.innerbox}> 
          <h2>Login</h2>
          <input onChange={(e)=>{setemail(e.target.value)}} placeholder=' Email'/>
          <input onChange={(e)=>{setpassword(e.target.value)}} type='password' placeholder='password'/>
          <button onClick={funn} className={Style.loginbth}>Login</button>
        </div>
        <div className={Style.overlay}></div>
    </div>
  )
}
