import React from 'react'
import lawyers from './images/lawyers.svg'
import cost from './images/cost.png'
import time from './images/time.png'
import person from './images/person.png'
import "./Heropage.css"
import { BsFillCCircleFill } from 'react-icons/bs'


const Heropage = () => {
  return (
    <div className='Content'>
      <div className='heading'>
        <div className='text-div'>
          <p className='text'>As artificial intelligence continues to advance,
            it is becoming increasingly clear that it will be
            an invaluable tool for both lawyers and non-lawyers
            in the legal field, providing unprecedented levels of
            insight and efficiency.
          </p>
        </div>
        <img src={lawyers} alt="" />
      </div>

      <div className='features'>
        <div className='feature'>

          <img className='feature-image' src={cost} alt="" />
          <span>
            90% cost saved compared to
            manual approaches
          </span>

        </div>
        <div className='feature'>
          <img className='feature-image' src={time} alt="" />
          <span>
            80% time is saved obtaining
            the right legal information
          </span>
        </div>
        <div className='feature'>
          <img className='feature-image' src={person} alt="" />
          <span>
            User friendly and intuitive
            design
          </span>
        </div>
      </div>



      <div className='info'>
        <div className='info-Section'>
          <p>Legally AI</p>
        </div>
        <div className='info-Section'>
          <p>Home</p>
          <p>Document Generation</p>
          <p>Meet a Lawyer</p>
          <p> Simplify Documents</p>
          <p> Chat Box</p>
        </div>
        <div className='info-Section'>
          <p>About Us </p>
          <p>Blog</p>
          <p>Company Updates</p>
          <p>Login</p>
        </div>
        <div className='info-Section'>
          <p>Contact Us</p>
          <p>@hellolegallyai</p>
          <p>+2348143589644</p>
        </div>
      </div>
      <footer>
        <div className='footer'> 
        <div className='footer-sub' id='rights'>
          <span><BsFillCCircleFill /></span>
          <div>
            2023 LegallyAI. All rights reserved

          </div>
        </div>

        <div className='footer-sub' id='term'>
          <div className='inner-1'>Terms of Use</div>
          <div className='inner-2'>Privacy Policy</div>
          <div className='inner-3'>Cookies</div>
          
        </div>
        </div>
      </footer>
    </div>




  )
}

export default Heropage
