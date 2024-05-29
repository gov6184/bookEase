import React, { useState } from 'react'
import style from "../css/Singlebook.module.css"

import ReactCardFlip from 'react-card-flip';
import { useNavigate } from 'react-router-dom'
import Moreinfo from './Moreinfo';
export default function Singlebook({item,changeitem,loginstatus}) {
    let [fliped,isfliped]=useState(false);
    let navigate=useNavigate()
  return (

    
        <ReactCardFlip isFlipped={fliped}  flipDirection='horizontal'>
            <div className={style.bookcover} onClick={()=>{isfliped(!fliped)}}>
                <img src={`${item.bookInfo.bookImage}`}/>
            </div>
            <div className={style.bookinfo} onClick={()=>{isfliped(!fliped)}}>
                <div className={style.booktitle}>
                    <h4>Title:</h4>
                    <p> {item.bookInfo.bookTitle}</p>
                </div>
                <div className={style.booktitle}>
                    <h4>Author:</h4>
                    <p>Author : {item.bookInfo.bookAuthor}</p>
                </div>
                <div className={style.booktitle}>
                    <h4>Publisher:</h4>
                    <p>{item.bookInfo.bookPublisher}</p>
                </div>
                <div className={style.booktitle}>
                    <h4>BuyPrice:</h4>
                    <p>{item.bookInfo.bookbuyPrice}</p>
                </div>
                <div className={style.booktitle}>
                    <h4>RentPrice:</h4>
                    <p>{item.bookInfo.bookRentPrice}</p>
                </div>
                
                <div className={style.booktitle}>
                    <h4>Genre:</h4>
                    <p>{item.bookInfo.Genre}</p>
                </div>
                <div className={style.buttondiv}>
               
                <button onClick={()=>{changeitem(item);navigate("/Moreinfo")}} className={style.knowmorebutton}>Know more</button>
                </div>
               
            </div>
        </ReactCardFlip>
       
    
  )
}








