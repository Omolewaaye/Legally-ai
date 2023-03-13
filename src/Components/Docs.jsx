import React from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { BsFillCCircleFill } from 'react-icons/bs'
import doc from "./images/doc.svg"
import "./Docs.css"

function Docs() {
  return (
    <div className='files'>
      <div className='logo'>
        <span><ion-icon name="pause-outline"></ion-icon></span>
        Legally AI
      </div>
      <div className='Simplify'>
        <p>Simplify your Legal Documents </p>
        <p>To Aid Understanding of What Your</p>
        <p> Document Entails. </p>
      </div >
      <div className='docs'>
        <span >
          <img src={doc} alt="" />
        </span>
      </div>
      <div className='btn'>
        <input type="button" value="choose a file" />
      </div>
      <div >
      <div className='how' >
        <h3>How To Simplify Your Legal Documents</h3>
        </div>
        <div className='steps'>

          <p>Step 1</p>
          <div className='step'>
            <p>Upload Your Documents</p>
          </div>
          <p>Step 2</p>
          <div className='step'>
            <p>Convert Your Documents</p>
          </div>
          <p>Step 3</p>
          <div className='step'>
            <p> Download  File</p>
          </div>
        
        </div>
        <div className='simplify'>
        <h4>Simplify Documents Here</h4>
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
      </div>
    

  )
}

export default Docs
