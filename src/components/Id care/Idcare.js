import React from 'react'
import { Button } from 'react-bootstrap'
import './Idcare.css'




const Idcare = () => {
  return (
    <section className='section-idcare'> 
    <div className='container'>
        <div className='grid grid-two-column'>
            <div className='idcare'>
                <div>
                    <img src="https://www.digiprima.com/images/sec5-iphone.webp" alt="" />
                </div>
            </div>
            <div className='column-2'>
            <h2>
                ID CARE
              </h2>
              <hr className="left-line" />
              <p>
              Connecting patients to the highest level of infectious disease expertise at ID Care. Patient Portal is a secure, convenient, and easy way to access your health information
              </p>
            
              <ul>
                <li>Communicate with your provider. Get reminders.</li>
                <li>Manage your appointments.</li>
                <li>Access your test results.</li>
                <li>View your medications and request refills</li>
              </ul>
              <div className="my-5"> 
              <Button  text="Find out more" type="black" />
                
              </div>
             
            </div>
        </div>

    </div>
    </section>
  )
}

export default Idcare