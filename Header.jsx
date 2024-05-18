import React from 'react'
import logo from '../assets/file/images/logo.png'
import main from '../assets/file/images/main.png'
import main2 from '../assets/file/images/main2.png'
function Header() {
  return (
    <>
    <div className="outermainhead">
      <div className="uppernav">
        <div className="leftuppernav">
          <img src={logo} alt="" />

        </div>
        <div className="rightuppernav">
          <ul>
            <li>FEATURES</li>
            <li>SCREENSHOT</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>PRICING</li>
            <li>CONTACT</li>
          </ul>

        </div>
      </div>
      <div className="herocontainer">
        <div className="leftherocontainer">
          <div className="upperleftherocontainer">
            <p>Showcase your App <br />with <span className='bold'>PsdFreebies.com</span></p>
          </div>
          <div className="downleftherocontainer">
            <p>Proien scelerisque fringilla magna bibendum dui tempor <br />veinteger accumsan fermentum leousce viverraeinteger</p>
          </div>
          <div className="buttonleftherocontainer">
            <button>Download</button>
          </div>

        </div>
        <div className="rightherocontainer">
          <img  src={main} alt="" />
          <img src={main2} alt="" />
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Header
