import React from 'react'
import style from "../css/addbookpopup.module.css"

import { useRef } from 'react'
import { useState } from 'react'

export default function Addbookpopup({toggle ,settoggle}) {
   
   let [bookTitle,setbookTitles] = useState("");
   let [bookAuthor,setBookAuthor] = useState("");
   let [bookPublisher,setBookPublisher] = useState("");
   let [bookPriceForRent,setBookPriceForRent] = useState("");
   let [bookPriceForSell,setBookPriceForSell] = useState("");
   let [genre,setgenre] = useState("");
   let [bookDescription,setBookDescription] = useState("");
   let [show,setshow]=useState("hide")
    let addbook=()=>{
        let obj={
            bookTitle:bookTitle,
            bookAuthor:bookAuthor,
            bookPublisher:bookPublisher,
            bookPriceForRent:bookPriceForRent,
            bookPriceForSell:bookPriceForSell,
            genre:genre,
            bookDescription:bookDescription
        }
    }
    
   return toggle? (
    <>
    <form  className={style.modal} >
         <h2>Add book</h2>
         <div>
            <div  className={style.inputdiv}>
                <input onChange={(e)=>{setbookTitles(e.target.value)}}  placeholder=' ' name='from_name' className={style.inputbox} required />
                <label className={style.inputlabel}>book Title *</label>
            </div>
            <div  className={style.inputdiv}>
                <input onChange={(e)=>{setBookAuthor(e.target.value)}}  placeholder=' ' name='from_name' className={style.inputbox} required />
                <label className={style.inputlabel}>book Author *</label>
            </div>
         </div>
         <div>
            <div  className={style.inputdiv}>
                <input onChange={(e)=>{setBookPublisher(e.target.value)}}  placeholder=' ' name='from_name' className={style.inputbox} required />
                <label className={style.inputlabel}>book Publisher *</label>
            </div>
            <div  className={style.inputdiv}>
                <input onChange={(e)=>{setBookPriceForRent(e.target.value)}}  placeholder=' ' name='from_name' className={style.inputbox} required />
                <label className={style.inputlabel}>book Price For Rent *</label>
            </div>
            
         </div>
         <div>
            <div  className={style.inputdiv}>
                <input onChange={(e)=>{setBookPriceForSell(e.target.value)}}  placeholder=' ' name='from_name' className={style.inputbox}  />
                <label className={style.inputlabel}>book Price For Sell</label>
            </div>
            <div  className={style.inputdiv}>
                <input onChange={(e)=>{setgenre(e.target.value)}}  placeholder=' ' name='from_name' className={style.inputbox} required />
                <label className={style.inputlabel}>Genre *</label>
            </div>
         </div>
         <div>
            <div  className={style.inputdiv}>
                <input placeholder=' ' onChange={(e)=>{setBookDescription(e.target.value)}} name='form_name' required/> 
                <label className={style.inputlabel}>book Description *</label>
            </div>
          
         </div>
        

          <button onClick={addbook} className={style.loginbth}>Add</button>
    </form>
    
    <div className={style.overlay} onClick={()=>{settoggle(false)}}>

    </div>
    
    
    </>
  ):""
}
