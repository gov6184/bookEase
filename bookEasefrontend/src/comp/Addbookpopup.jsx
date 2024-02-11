import React from 'react'
import style from "../css/addbookpopup.module.css"

import { useRef } from 'react'
import { useState } from 'react'
import axios from "axios"

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
          
        console.log("hi")
        let obj={
             book_id:  `${generateRandomUniqueBookID()}`,
             ownerName:"random",
             availableFor:"both",
             bookInfo:{
                bookImage:"https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
                bookTitle:bookTitle,
            bookAuthor:bookAuthor,
            bookPublisher:bookPublisher,
            bookRentPrice:bookPriceForRent,
            bookbuyPrice:bookPriceForSell,
            Genre:genre,
            bookDescription:bookDescription
             },
            bookQualityRating:4.7
        }
       console.log(obj)
        //  axios.post("http://localhost:8080/books/add",obj).then((res)=>console.log(res)).catch((err)=>console.log(err));
         fetch("http://localhost:8080/books/add", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // adjust as needed based on your server
            },
            body: JSON.stringify(obj)
          })
          .then(response => response.json()) // Parse the response as JSON
          .then(data => {
            // Handle successful response
            console.log(data);
            settoggle(false)
          })
          .catch(error => {
            // Handle errors
            console.error(error);
          });
    }
    
   return toggle? (
    <>
    <div  className={style.modal} >
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
    </div>
    
    <div className={style.overlay} onClick={()=>{settoggle(false)}}>

    </div>
    
    
    </>
  ):""
}
