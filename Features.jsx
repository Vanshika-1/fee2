import React from 'react'
import icon1 from '../assets/file/images/b.png'
import icon2 from '../assets/file/images/g.png'
import icon3 from '../assets/file/images/t.png'
import icon4 from '../assets/file/images/d.png'
import phone from '../assets/file/images/phone.png'

function Features() {
  return (
    <>
    <div className="outerfeatures">
        <div className="leftouterfeatures">
            <div className="upperleftouterfeatures">
                <p>Some Amazing Features</p>
            </div>
            <div className="downleftouterfeatures">
                <div className="firstdownleftouterfeatures">
                    <div className="iconf">
                        <img src={icon1} alt="" />
                        EASY TO CUSTOMIZE
                        
                    </div>
                    <div className="iconf">
                        <img src={icon2} alt="" />
                        RESPONSIVE DESIGN
                    </div>
                </div>
                <div className="firstdownleftouterfeatures">
                    <div className="iconf">
                        <img src={icon3} alt="" />
                        PERFECT SHOWCASE
                        
                    </div>
                    <div className="iconf">
                        <img src={icon4} alt="" />
                        APP STORE SUPPORT
                    </div>
                </div>
            </div>

        </div>
        <div className="rightouterfeatures">
            <img src={phone} alt="" />

        </div>
    </div>
      
    </>
  )
}

export default Features
