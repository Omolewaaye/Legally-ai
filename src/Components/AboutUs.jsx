import React from 'react'
import "./AboutUs.css"
import mission from './images/mission.png'
import {BsFillCCircleFill} from 'react-icons/bs'

function AboutUs() {
  return (
    <div className='About-us'>
      <div className='Overview'>
<h2> Company Overview</h2>
      </div>
      <div className='aim'>
        <p>Legally  AI is a legal technology company that aims 
        to revolutionize the legal industry by providing AI-powered 
        <p>solutions that streamline and automate legal processes. 
        </p>
        </p>
      </div>
      <div className='infos '>
      <div className='info'>
        <p>HEADQUARTERS</p> 
        <div className='Nig'>
        <p>Lagos, Nigeria</p>
        </div>
        </div>
        <div  className='info'>
        <p>YEAR ESTABLISHED</p>
        <div className='Nig'>
        <p>2023</p>
        </div>
        </div>
        <div  className='info'>
        <p>EMPLOYEES</p>
        <div className='Nig'>
        <p>50+</p>
        </div>
        </div>
        </div>
        {/* <img src={mission} alt="" /> */}
        <div className='Mission'>
          <h2>Mission</h2>
          </div>
          <div className='Statement'>
            
          <p>"Our mission is to revolutionize the legal industry with innovative 
and intelligent AI solutions that help our clients make better, faster,
 and more informed decisions. 
</p>

</div>
<div className='Vision'>

  <h4>Vision
  <p>We aim to simplify complex legal
 processes, increase efficiency, and reduce costs, while providing
 a seamless and intuitive user experience. Our commitment to cutting-edge
 technology and exceptional customer service will enable us to deliver
 the highest quality of legal AI solutions, while building strong and 
lasting partnerships with our clients."</p>
</h4>
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

export default AboutUs
