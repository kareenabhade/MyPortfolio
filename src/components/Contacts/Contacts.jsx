import React from 'react'
import './contacts.css'
import Logo from '../Logo/Logo'
import ResponsiveNavBar from '../ResponsiveNavbar/ResponsiveNavbar'
import lnkdn from '../images/linkedin.png';
import github from '../images/github.png';
import insta from '../images/instagram.png';
import gmail from '../images/gmail.png';


function Contacts() {
  return (
    <>
    <ResponsiveNavBar />
    <div id='contacts-page'>
    <div  className='contact-heading'>
    <p className='nice'>Nice to meet you !</p>
    <span className='smile'>&#128578;</span>
    </div>
    
    <div className='container-contacts'>

        <div className='contact-logo'>
        <a href='https://www.linkedin.com/in/kareena-bhade-b914a7260' target='_blank' rel='noopener noreferrer'>
        <Logo src={lnkdn} alt='linkedin' />
        </a>
        <a href='https://github.com/kareenabhade' target='_blank' rel='noopener noreferrer'>
        <Logo src={github} alt='github' />
        </a>
        <a href='https://instagram.com/kareena_bhade_001?igshid=MzMyNGUyNmU2YQ==' target='_blank' rel='noopener noreferrer'>
        <Logo src={insta} alt='instagram' />
        </a>
        <a href='mailto:kareenabhade16@gmail.com' target='_blank' rel='noopener noreferrer'>
        <Logo src={gmail} alt='gmail' />
        </a>
        </div>


        <div className='end'>
          <p>©Copyright 2023. Made by 
          <a className='kb'> Kareena Bhade</a>
          </p>
        </div>

    </div>
    </div> 
    </>
  )
}

export default Contacts