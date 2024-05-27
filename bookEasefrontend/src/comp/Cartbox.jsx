import React, { useState } from 'react'
import sstyle from  "../css/cartbox.module.css"
import { useNavigate } from 'react-router-dom'
export default function Cartbox({val,data,color,cartdata,setcartdata,cc}) {
  console.log(cartdata)
  let navigate=useNavigate()
  let [value,setvalue]=useState("")
  return (
    <div>
      <div className={val=="show"?`${sstyle.popup} ${sstyle.show}`:`${sstyle.popup} ${sstyle.notshow}`}>
        <div className={sstyle.mainbox}>
        {cartdata.map((elem)=>{
          return(
            <div className={sstyle.singlecartbox}>
            <img src={elem.bookInfo.bookImage}/>
            <div className={sstyle.singlebookinfo}>
              <h5>{elem.bookInfo.bookTitle}</h5>
              <h5>rentprice:{elem.bookInfo.bookRentPrice}   </h5>
            </div>
      </div>
          )
        })}
        </div>
       <div className={sstyle.anotherbox}>
        <h4>Total books : {cartdata.length}</h4>
        <br></br>
        <h4>Total Price : {cartdata.reduce((acc,curr)=>{
          let valee=Number(curr.bookInfo.bookRentPrice)
          return acc+valee
        },0)}</h4>
       </div>
       <div className={sstyle.rentbuttonbox}>
          <input onChange={(e)=>{setvalue(e.target.value)}} type='date'/>
          <button onClick={()=>{
            if(value==""){
              alert("please select a date")
              return
            }
            
            alert("book Rented")
           localStorage.removeItem("cartdata")
           cc([])
          }}>Rent</button>
       </div>
       
      
    
    </div>
    </div>
  )
}
