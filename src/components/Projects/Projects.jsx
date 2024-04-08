import React from 'react'
import './projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import ResponsiveNavBar from '../ResponsiveNavbar/ResponsiveNavbar'
import Chatlingual from '../images/chat-lingual.png'
import portfolioImg from '../images/img-portfolio.png'
import weatherWebsite from '../images/weather-website.png'
import ticTacToe from '../images/ticTacToe.png'
import crud from '../images/CRUD.png'

function Projects() {
  
  return (
    <>
    <ResponsiveNavBar />
    <div id='projects-page' className='project-box'>
      <h1 className='project-heading'>My Projects 🖊️</h1>
      <ProjectCard img={Chatlingual} name='Chat-lingual' descp='It is a chating platform where users from different language background can chat in their native language, and that text automatically get translated in real time using language translation APIs.' 
                   url='https://github.com/kareenabhade/Chat-lingual' techStack={["reactjs", "mui", "nodejs", "api"]} />
      <ProjectCard img={portfolioImg} name='My Portfolio' descp='A portfolio website that is designed and build by me to showcase my work and skills.' 
                    url='https://my-portfolio-beta-five-38.vercel.app/' techStack={["reactjs", "css" ]} />
      <ProjectCard img={weatherWebsite} name='Weather-website' descp='A weather website that provide information about current weather conditions around the world. ' 
                    url='https://weather-website-black.vercel.app/' techStack={["reactjs", "css", "api"]}  />
      <ProjectCard img={crud} name='CRUD' descp="A CRUD web application where user can add , update, and delete the book."
                    url='https://github.com/kareenabhade/CRUD' techStack={["reactjs", "nodejs", "css", "mysql"]} />
      <ProjectCard img={ticTacToe} name='TicTacToe' descp='A simple user friendly tic-tac-toe game.' 
                    url='https://tic-tac-toe-psi-eosin.vercel.app/' techStack={["reactjs", "css"]}  />
    </div>
    </>
  )
}

export default Projects