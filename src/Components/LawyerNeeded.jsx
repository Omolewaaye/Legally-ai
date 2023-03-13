import React, { useState } from 'react'
import { IoArrowBack, IoPauseOutline } from "react-icons/io5";
import "./LawyerNeeded.css"

function LawyerNeeded() {
    const [back, setBack] = useState(false)
    const clickBack = () =>
        setBack(!back)
    return (
        <div className='back'>
            <div className='arrow'>
            <IoArrowBack /></div>

            <div className='logo'>
                <IoPauseOutline />
                Legally AI
            </div>
            <div className='needs'>
                Helping you with your legal needs</div>
                <div className='Place'>
                 Legal Issue or Lawyer Name
                 <hr />
                City, state or zip
                <input  type="text" placeholder='Search'/>
            </div>
        
            <div className='find'>
                <h6>Find Lawyers by</h6>
                <h4>PRACTICE AREA</h4>
            </div>
            <div className='Services'>
                <div className='Service'>
                <p>Family Law</p>
                <p>Real Estate law</p>
                <p>Maritime Law</p>
                <p>Civil right law</p>
                </div>

                <div className='Service'>
                    <p>Criminal law</p>
                    <p>Agricultural law</p>
                    <p>Construction law</p>
                    <p>Health care law</p>

                </div>
                <div className='Service'>
                    <p>Criminal law</p>
                    <p>Employment law</p>
                    <p>Juvenile law</p>
                    <p>Landlords Tenants</p>
                </div>
                <div className='Service'>
                    <p>Education law</p>
                    <p>Business law</p>
                    <p>Tax law</p>
                    <p>Domestic violence</p>
                </div>
                </div>
               
                            <div className='States'>
                                <div className='State'>
                                    <p>Abia</p>
                                    <p>Adamawa</p>
                                    <p>AkwaIbom</p>
                                    <p>Anambra</p>
                                    <p>Bauchi</p>
                                    <p>FCT Abuja</p>
                                </div>
                                <div className='State'> 
                                    <p>Bayelsa</p>
                                    <p>Benue</p>
                                    <p>Borno</p>
                                    <p>CrossRivers</p>
                                    <p>Delta</p>
                                </div>
                                <div className='State'>
                                    <p>Ebonyi</p>
                                    <p>Edo</p>
                                    <p>Ekiti</p>
                                    <p>Enugu</p>
                                    <p>Gombe</p>
                                </div>
                                <div className='State'>
                                    <p>Imo</p>
                                    <p>Jigawa</p>
                                    <p>Kaduna</p>
                                    <p>Kano</p>
                                    <p>Kastina</p>
                                </div>
                                <div className='State'>
                                    <p>Kebbi</p>
                                    <p>Kogi</p>
                                    <p>Kwara</p>
                                    <p>Lagos</p>
                                    <p>Nasarawa</p>
                                </div>
                                <div className='State'>
                                    <p>Niger</p>
                                    <p>Ogun</p>
                                    <p>Ondo</p>
                                    <p>Osun</p>
                                    <p>Oyo</p>
                                </div>
                                <div className='State'>
                                    <p>Plateu</p>
                                    <p>Rivers</p>
                                    <p>Sokoto</p>
                                    <p>Taraba</p>
                                    <p>Yobe</p>
                                </div>
        
            </div>

        </div>
    )
}

export default LawyerNeeded
