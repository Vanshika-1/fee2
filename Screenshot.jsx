import React from 'react'
import phone from '../assets/file/images/phone.png'
function Screenshot() {
  return (
    <>
    <div className="outerscreen">
        <div className="upperouterscreen">
            <p>App Screenshot</p>
        </div>
        <div className="downouterscreen">
            <button> &larr; </button>
            <img src={phone} alt="" />
            <img src={phone} alt="" />
            <img src={phone} alt="" />
            <button> &rarr;</button>
        </div>
    </div>
      
    </>
  )
}

export default Screenshot

