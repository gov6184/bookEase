import React, { useState } from 'react'
import Style from '../css/BookSection.module.css'
import Footer from './Footer'
export default function BooksSection() {
  let i= Array.from({length:100})
  let [data,setdata]=useState(i)
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
    <Footer/>
</>
  )
}
