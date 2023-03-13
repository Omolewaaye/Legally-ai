import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function Meetalawyer() {
  return (
    <div className='arrow'>
      < AiOutlineArrowLeft />
      <div className='company'></div>
      Legally AI
      <div className='need'>
        <p>Helping you with your legal needs</p></div>
       <div> <placeholder>Search  Legal Issue or Lawyer Name City, state or zip</placeholder>
        <input type="text" placeholder='Search' />
      </div>
      <div className='find'>
        <h6>Find Lawyers by</h6>
        <h2>PRACTICE AREA</h2>
      </div>
      <div className='Services'>
        <table>
          <tbody>
            <tr>
              <tr>
                <td>Family Law</td>
                <td>Real Estate law</td>
                <td> Maritime Law</td>
                <td> Civil right law</td>
              </tr>
              <tr>
                <td>Criminal law</td>
                <td>Agricultural law</td>
                <td>Construction law</td>
                <td>Health care law</td>
              </tr>
              <tr>
                <td>Immigration law</td>
                <td>Employment law</td>
                <td>Juvenile law</td>
                <td> Landlords Tenants</td>
              </tr>
              <tr>
                <td>Education law</td>
                <td>Business law</td>
                <td>Tax law</td>
                <td>Domestic violence</td>

                <td>
                </td>
              </tr>
            </tr>
          </tbody>
        </table>
      </div>
      
        <table>
          <tbody>
            <tr>
              <tr>
                <td>Abia</td>
                <td>Adamawa</td>
                <td>Akwa-Ibom</td>
                <td> Anambra</td>
                <td>Bauchi</td>
              </tr>
              <tr>
                <td>Bayelsa</td>
                <td>Benue</td>
                <td>Borno</td>
                <td>CrossRivers</td>
                <td>Delta</td>
              </tr>
              <tr>
                <td>Ebonyi</td>
                <td>Edo</td>
                <td>Ekiti</td>
                <td>Enugu</td>
                <td> Gombe</td>

              </tr>
              <tr>
                <td>Imo</td>
                <td>Jigawa</td>
                <td>Kaduna</td>
                <td>Kano</td>
                <td>Kastina</td>


                <tr>
                  <td>Kebbi</td>
                  <td>Kogi</td>
                  <td>Kwara</td>
                  <td>Lagos</td>
                  <td> Nasarawa</td>


                </tr>
                <tr>
                  <td> Niger</td>
                  <td>Ogun</td>
                  <td>Ondo</td>
                  <td>Osun</td>
                  <td>Oyo</td>


                </tr>
                <tr>
                  <td>Plateu</td>
                  <td>Rivers</td>
                  <td>Sokoto</td>
                  <td>Taraba</td>
                  <td>Yobe</td>
                  <td> Abuja</td>
                </tr>
                <td>
                </td>
              </tr>
            </tr>
          </tbody>
        </table>
      
    </div>



  )
}

export default Meetalawyer
