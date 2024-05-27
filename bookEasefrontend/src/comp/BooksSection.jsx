import React, { useEffect, useState } from 'react'
import Style from '../css/BookSection.module.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
export default function BooksSection({changeitem}) {
  let i= Array.from({length:100})
  let [data,setdata]=useState([])
  useEffect(() => {
    fetch("http://localhost:8080/books")
        .then(response => response.json())
        .then(data => {
            setdata(data);
        })
        .catch(error => console.log(error));
}, []);
let navigate=useNavigate()
  return (
<>
    <div className={Style.allbooks}>
      <h1>Trending Books</h1>
        <div className={Style.trendingbooks}>
          <section className={Style.no1book}></section>
          <div className={Style.otherbook}>
            <div>
            {
              data.map((e)=>{
                return(
                  <div className={Style.singlebook}>
                <img src={e.bookInfo.bookImage} />
                <div>
                  <p>{e.bookInfo.bookTitle}</p>
                  <button onClick={()=>{
                    changeitem(e)
                    navigate("/moreinfo")
                  }}>view</button>
                </div>
              </div>
                )
              })
            }
            </div>
           <div>
           {
              data.map((e)=>{
                return(
                  <div className={Style.singlebook}>
                <img src='https://images-eu.ssl-images-amazon.com/images/I/51wMtcw54qL._SL160_.jpg'/>
                <div>
                  <p>City of Ashes Class Andra</p>
                  <button>submit</button>
                </div>
              </div>
                )
              })
            }
           </div>
            
              
          </div>
          
        </div>
        
    </div>
</>
  )
}
