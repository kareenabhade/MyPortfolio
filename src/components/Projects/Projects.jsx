import React from 'react'
import './projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import ResponsiveNavBar from '../ResponsiveNavbar/ResponsiveNavbar'
import todo from '../images/todo.png'
import portfolioImg from '../images/img-portfolio.png'
import whatsappImg from '../images/whatsapp-clone.png'

function Projects() {
  
  return (
    <>
    <ResponsiveNavBar />
    <div id='projects-page' className='project-box'>
      <h1 className='project-heading'>My Projects</h1>
      <ProjectCard img={todo} name='Todo Web App' descp='This web app makes project management fun with a simple design. Manage tasks & events, attach files, delegate and share items in seconds.'/>
      <ProjectCard img={portfolioImg} name='My Portfolio' descp='This is my portfolio website where all my technical work is hosted.' />
      <ProjectCard img={whatsappImg} name='Whatsapp Clone' descp='This is a whatsapp clone that buils an efficient and real time text based communication solution for the web' />
      
    </div>
    </>
  )
}

export default Projects