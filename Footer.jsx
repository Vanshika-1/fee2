import React from 'react'
import logo from '../assets/file/images/logo.png'
import icon1 from '../assets/file/images/icon1.png'
import icon2 from '../assets/file/images/icon2.png'
import icon3 from '../assets/file/images/icon3.png'
import icon4 from '../assets/file/images/icon4.png'

function Footer() {
  return (
    <>
    <div className="outerscreen">
        <div className="upperouterscreen">
            <img src={logo} alt="" />
        </div>
        <div className="iconsdiv">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
        <div className="desc">
            <p>Copyright &copy; PSDFreebies.com|All rights reserved</p>
        </div>
        
    </div>
      
    </>
  )
}

export default Footer
