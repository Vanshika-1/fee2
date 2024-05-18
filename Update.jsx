import React from 'react'
import apple from '../assets/file/images/e.png'
import android from '../assets/file/images/f.png'
import video from '../assets/file/images/video.png'
import window1 from '../assets/file/images/window.png'

function Update() {
  return (
    <>
    <div className="outerupdate">
        <div className="upperouterupdate">
            <p>Download & Updates</p>

        </div>
        <div className="downouterupdate">
            <div className="iconp">
                <img src={apple} alt="" />
                <p>2118</p>
                <p>Downloads</p>
            </div>
            <div className="iconp red">
                <img src={android} alt="" />
                <p>2118</p>
                <p>Downloads</p>
            </div>
            <div className="iconp orange">
                <img src={window1} style={{width:'3vw'}} alt="" />
                <p>2118</p>
                <p>Downloads</p>
            </div>
            <div className="inputouter">
                <div className="upperinputouter">
                    <h5>We promise,your mail never will be span</h5>
                <input type="text" placeholder='Enter Email Address' />
                </div>
                <button>SUBMIT</button>
            </div>
        </div>
        <div className="imageouterupdate">
            <img src={video} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default Update

