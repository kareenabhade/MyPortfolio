import React from 'react'
import './projectCard.css'


function ProjectCard({name,img,descp,url='https://www.google.com/',techStack}) {

  return (
    <div className='box-projectCard' onClick={() => window.location.href = url}>
    <img className='project-img' src={img}></img>
    <div>
        <h5 className='project-name'>{name} ↗️ </h5>
 
      
      <p className='project-descp'>{descp}</p>
        <div className='technologies' >
        {
          techStack.map((tech)=>{
            return <span className='techStack'>#{tech}</span>
          })
        }
      </div>
     
     

    </div> 
    </div>
  )
}

export default ProjectCard


