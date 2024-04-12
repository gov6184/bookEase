import React, { useState } from 'react'
import style from "../css/Singlebook.module.css"
import ReactCardFlip from 'react-card-flip';

export default function Singlebook({item}) {
    let [fliped,isfliped]=useState(false);
  return (

    
        <ReactCardFlip isFlipped={fliped}  flipDirection='horizontal'>
            <div className={style.bookcover} onClick={()=>{isfliped(!fliped)}}>
                <img src={`${item.bookInfo.bookImage}`}/>
            </div>
            <div className={style.bookinfo} onClick={()=>{isfliped(!fliped)}}>
                <div className={style.booktitle}>
                    <p>Title : {item.bookInfo.bookTitle}</p>
                </div>
                <div className={style.bookauthor}>
                    <p>Author : {item.bookInfo.bookAuthor}</p>
                </div>
                <div className={style.bookpublisher}>
                    <p>Publisher : {item.bookInfo.bookPublisher}</p>
                </div>
                <div className={style.bookpages}>
                    <p>BuyPrice : {item.bookInfo.bookbuyPrice}</p>
                </div>
                <div className={style.bookprice}>
                    <p>RentPrice : {item.bookInfo.bookRentPrice}</p>
                </div>
                
                <div className={style.bookdescription}>
                    <p>Genre : {item.bookInfo.Genre}</p>
                </div>
            </div>
        </ReactCardFlip>
       
    
  )
}








