import React, { useState } from 'react'
import style from "../css/renting.module.css"
import Singlebook from '../comp/Singlebook'
import Footer from '../comp/Footer'
import Addbookpopup from '../comp/Addbookpopup'

export default function Renting() {
    let [data,setdata]=useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])
    let [toggle,settoggle]=useState(false)
  return (
    <>
        <div className={style.rentingbox}>
        <div className={style.searchandsellingbutton}>
            <button onClick={()=>{settoggle(true)}} className={style.rentingbutton}>Add a book</button>
            <div className={style.searchbox}>
            <input placeholder='Search...' className={style.booksearch}/><img src={"src/css/loupe.png"}/>
            </div>
            
        </div>
        <div className={style.mainbox}>
            <div className={style.filtersortbox}>
                <div className={style.filterbox}>
                    <p>Filter</p>
                    <div className={style.Genre}>
                        <p>Genre :</p>
                        <select placeholder='Genre'>
                            <option>Action and adventure</option>
                            <option>Classics</option>
                            <option>Comic books and graphic novels</option>
                            <option>Detective and mystery</option>
                            <option>Fantasy</option>
                            <option>Historical fiction</option>
                            <option>Literary fiction</option>
                            <option>Horror</option>
                            <option>Romance</option>
                            <option>Science fiction</option>
                            <option>Suspense and thrillers</option>
                        </select>
                    </div>
                    <div className={style.Genre}>
                        <p>availability :</p>
                        <select placeholder='Genre'>
                            <option>Rent</option>
                            <option>Buy</option>
                            <option>All</option>
                           
                        </select>
                    </div>
                    
                </div>
                <div className={style.sortbox}>
                    <p>Sort</p>
                    <div className={style.price}>
                    <p>Price :</p>
                        <select placeholder='Genre'>
                            <option>low-to-high</option>
                            <option>high-to-low</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className={style.booksectionbox}>
                {
                    data.map((item,index)=>{
                        return(
                            <Singlebook/>
                        )
                    })
                }
            
            </div>

        </div>
        
        </div>
        <Footer/>
        <Addbookpopup toggle={toggle} settoggle={settoggle}/>
    </>
  )
}
