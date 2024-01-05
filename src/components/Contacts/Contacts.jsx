import React from 'react'
import './contacts.css'
import Logo from '../Logo/logo'
import ResponsiveNavBar from '../ResponsiveNavbar/ResponsiveNavbar'

function Contacts() {
  return (
    <>
    <ResponsiveNavBar />
    <div id='contacts-page' className='contact-heading'>
    <p className='nice'>Nice to meet you !</p>
    <span className='smile'>&#128578;</span>
    </div>
    
    <div className='container-contacts'>

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


        <div className='end'>
          <p>©Copyright 2023. Made by 
          <a className='kb'> Kareena Bhade</a>
          </p>
        </div>

        </div>
       
    </>
  )
}

export default Contacts