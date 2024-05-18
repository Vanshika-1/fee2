import React from 'react'
import video from '../assets/file/images/video3.jpg'
import play from '../assets/file/images/a.png'
function Video() {
  return (
    <>
    <div className="outervideo">
        <div className="upperoutervideo">
            <p>App Video Showcase</p>
        </div>
        <div className="downoutervideo">
            {/* <img src={video} alt="" /> */}
            <img src={play} alt="" />

        </div>

    </div>
      
    </>
  )
}

export default Video

