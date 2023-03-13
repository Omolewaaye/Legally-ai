import React from 'react'
import {IoPauseOutline} from 'react-icons/io5'
import pose from './images/pose.png'
import {AiOutlineAudioMuted} from 'react-icons/ai'
import {IoMdKeypad} from 'react-icons/io'
import {RxSpeakerLoud} from 'react-icons/rx'
import "./Dial.css"


function Dial() {
  return (
    <div className='call'>
         <IoPauseOutline/>
        Legally AI
        <div className='Img'>

         <img src={pose} alt="" />
         </div>

         <div className='icons'>
          <div className='icon'>

           
<div className='icon-tag'>
         <AiOutlineAudioMuted/>
         
         <span>Mute</span>
        
         </div>
         <div className='icon'>
          <div className='icon-tag'>
         <IoMdKeypad/>
         <span>Keypad</span>
         </div>
         </div>
         <div className='icon'>
          <div className='icon-tag'>
        < RxSpeakerLoud/>
        <span>Speaker</span>
        </div>
        </div>
        </div>
        </div>
        </div>

        
    
  )
}

export default Dial
