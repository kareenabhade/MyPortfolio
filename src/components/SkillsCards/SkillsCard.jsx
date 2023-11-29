import React from 'react'
import './skillsCard.css'

function SkillsCard({src,content}) {
    
  return (
    <>
    <div className='skill-card'>
    
    <img className='head' src={src}></img>
    <p className='skill-name'> {content}</p>
    </div>
    </>
    
  )
}

export default SkillsCard