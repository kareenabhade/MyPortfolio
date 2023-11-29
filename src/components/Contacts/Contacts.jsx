import React from 'react'
import './contacts.css'
import Logo from '../Logo/logo'

function Contacts() {
  return (
    <>
    <div id='contacts-page' className='contact-heading'>
    <p className='nice'>Nice to meet you !</p>
    <span className='smile'>&#128578;</span>
    </div>
    
    <div className='container-contacts'>
        

        {/* <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.962568972466!2d76.03762019839476!3d22.952984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317457fca4b73%3A0x74f4d7a0e30f786!2sBadridham%20Nagar!5e0!3m2!1sen!2sin!4v1699359081156!5m2!1sen!2sin" 
        width="600" 
        height="350" 
        style={{border:0 }}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div> */}

        <div className='contact-logo'>
        <a href='https://www.linkedin.com/in/kareena-bhade-b914a7260' target='_blank' rel='noopener noreferrer'>
        <Logo src='src\images\linkedin.png' alt='linkedin' />
        </a>
        <a href='https://github.com/kareenabhade' target='_blank' rel='noopener noreferrer'>
        <Logo src='src\images\github.png' alt='github' />
        </a>
        <a href='https://instagram.com/kareena_bhade_001?igshid=MzMyNGUyNmU2YQ==' target='_blank' rel='noopener noreferrer'>
        <Logo src='src\images\instagram.png' alt='instagram' />
        </a>
        <a href='' target='_blank' rel='noopener noreferrer'>
        <Logo src='src\images\telephone.png' alt='telephone' />
        </a>
        <a href='mailto:kareenabhade16@gmail.com' target='_blank' rel='noopener noreferrer'>
        <Logo src='src\images\gmail.png' alt='gmail' />
        </a>
        </div>

        </div>
        <div className='end'>
          <p>©Copyright 2023. Made by 
          <a className='kb'> Kareena Bhade</a>
          </p>
        </div>
    </>
  )
}

export default Contacts