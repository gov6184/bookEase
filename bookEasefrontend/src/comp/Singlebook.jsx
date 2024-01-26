import React, { useState } from 'react'
import style from "../css/Singlebook.module.css"
import ReactCardFlip from 'react-card-flip';

export default function Singlebook() {
    let [fliped,isfliped]=useState(false);
  return (

    
        <ReactCardFlip isFlipped={fliped}  flipDirection='horizontal'>
            <div className={style.bookcover} onClick={()=>{isfliped(!fliped)}}>
                <img src={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1cYJ34xU2gQj46RyAYfqI8yz44CdZJRI7cw1xEMOuAyGfIX7M"}/>
            </div>
            <div className={style.bookinfo} onClick={()=>{isfliped(!fliped)}}>
                <div className={style.booktitle}>
                    <p>Book Title</p>
                </div>
                <div className={style.bookauthor}>
                    <p>Book Author</p>
                </div>
                <div className={style.bookpublisher}>
                    <p>Book Publisher</p>
                </div>
                <div className={style.bookpages}>
                    <p>Book Pages</p>
                </div>
                <div className={style.bookprice}>
                    <p>Book Price</p>
                </div>
                <div className={style.bookdescription}>
                    <p>Book Description</p>
                </div>
            </div>
        </ReactCardFlip>
       
    
  )
}
