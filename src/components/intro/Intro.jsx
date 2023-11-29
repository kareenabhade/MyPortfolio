import React from 'react'
import './intro.css'
import System from '../System-image/System'


function Intro() {
  return (
    < >
    <div id='home-page' className='intro'>
     <div className='intro-content'>
      <div className='hello'>
          <h4 className='hello1' >Hello,</h4>
              <div className='home'>
                  <img className="wave" src='src\images\wave.png'></img>
              </div>
      </div> 
        <h1 className='i-am'>I'm <span id='kareena'>Kareena</span> </h1>
      <h2 className='sd'>Software Developer</h2>
      </div>
      <img className='girl' src='src\images\girl.png'></img>
      <System />
    </div>
    
    </>
  )
}

export default Intro

