import React from 'react'
import './projectCard.css'

function ProjectCard({name,img,descp}) {
  return (
    <div className='box-projectCard'>
    <img className='project-img' src={img}></img>
    <div>
      <h5 className='project-name'>{name}</h5>
      <p className='project-descp'>{descp}</p>
      <button className='visit' role="button">Visit</button>
    </div> 
    </div>
  )
}

export default ProjectCard