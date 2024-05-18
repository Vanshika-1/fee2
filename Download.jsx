import React from 'react'
import apple from '../assets/file/images/e.png'
import android from '../assets/file/images/f.png'


function Download() {
  return (
    <>
    <div className="outerdownload">
        <div className="upperouterdownload">
            <p>Get it for Free</p>
        </div>
        <div className="descouterdownload">
            <p>Choose your native platform and download the app free</p>
        </div>
        <div className="buttonouterdownload">
            <div className="leftbuttonouterdownload">
                <button className='buttonset'><img src={android} alt="" /> Google Play</button>

            </div>
            <div className="rightbuttonouterdownload">
            <button className='buttonset'><img src={apple} alt="" />IOS App Store</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Download
