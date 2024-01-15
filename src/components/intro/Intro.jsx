import React from 'react'
import './intro.css'
import System from '../System-image/System'
import ResponsiveNavBar from '../ResponsiveNavbar/ResponsiveNavbar'
import wave from '../images/wave.png'
import girl from '../images/girl.png'



function Intro() {
  return (
    < >
    <ResponsiveNavBar />
    <div id='home-page' className='intro'>
     <div className='intro-content'>
      <div className='hello'>
          <h4 className='hello1' >Hello,</h4>
              <div className='home'>
                  <img className="wave" src={wave}></img>
              </div>
      </div> 
        <h1 className='i-am'>I'm <span id='kareena'>Kareena</span> </h1>
      <h2 className='sd'>Software Developer</h2>
      </div>
      <img className='girl' src={girl}></img>
      <System />
    </div>
    
    </>
  )
}

export default Intro

