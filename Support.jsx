import React from 'react'
import phone from '../assets/file/images/phone.png'
import people from '../assets/file/images/people.png'


function Support() {
  return (
    <>
    <div className="outerchoose">
        <div className="upperouterchoose">
            <p>App Support</p>
        </div>
        
        <div className="alldownouterchoose">
            <div className="leftalldownouterchoosesp">
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='Email' />
                <input type="number" placeholder='Phone' />
                <textarea name="message" placeholder='Message' id="message" cols="30" rows="10"></textarea>
                <button>Submit</button>
            </div>
            <div className="midalldownouterchoose">
                <img src={phone} alt="" />
            </div>
            <div className="rightalldownouterchoose">
                <div className="upperrightalldownouterchoose">
                    <h4>Online Chat</h4>
                    <img src={people} alt="" />
                    <p>John Thomos</p>
                    <button className='online'>Online</button>
                    <button className='start'>Start Chat</button>
                </div>
            

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Support
