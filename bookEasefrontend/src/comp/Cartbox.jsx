import React from 'react'
import sstyle from  "../css/cartbox.module.css"
export default function Cartbox({val,data,color,cartdata}) {
  console.log(cartdata)
  return (
    <div>
      <div className={val=="show"?`${sstyle.popup} ${sstyle.show}`:`${sstyle.popup} ${sstyle.notshow}`}>
        <p style={{fontSize:"30px"}}>&#128512;</p>
        <span className={sstyle.popupname}>{data}</span>
    
    </div>
    </div>
  )
}
