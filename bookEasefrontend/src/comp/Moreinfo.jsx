import React from 'react'
import style from "../css/Moreinfo.module.css"
export default function Moreinfo({item,loginstatus,setcartdata}) {
console.log(item)
  return (
    <div className={style.Moreinfomainbox}>
            <div className={style.innerdiv}>
                <img src={item.bookInfo.bookImage}/>
                <div className={style.content}>
                    <h1>{item.bookInfo.bookTitle}</h1>
                    <p>Owner Name : {item.ownerName}</p>
                    <p>Author : {item.bookInfo.bookAuthor}</p>
                    <p>Publisher : {item.bookInfo.bookPublisher}</p>
                    <p>BuyPrice : {item.bookInfo.bookbuyPrice}</p>
                    <p>RentPrice : {item.bookInfo.bookRentPrice}</p>
                    <p>Genre : {item.bookInfo.Genre}</p>
                    <p>Quality Rating : {item.bookQualityRating}</p>
                    <p>Description : {item.bookInfo.bookDescription}</p>
                    <button onClick={()=>{
                      if(loginstatus==false){
                        alert("please signup or login first");
                        return
                      }
                      setcartdata(item)
                    }}>Add to Cart</button>
                </div>
            </div>
    </div>
  )
}
