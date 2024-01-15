import React from 'react'
import './about.css'
import SkillsCard from '../SkillsCards/SkillsCard';
import ResponsiveNavBar from '../ResponsiveNavbar/ResponsiveNavbar';
import html from '../images/html.png';
import css from '../images/csss.png';
import js from '../images/js.png';
import react from '../images/react.png';
import Cpp from '../images/Cpp.png';
import database from '../images/database.png';


function About() {
  return (
    <>
    <ResponsiveNavBar />
   <div id='about-page' className='main-container'>
   <h1 className='about-heading'> About Me</h1>
    <div className='about-container'>
      <div className='about-skill'>
      <div className='abt'>
        <h3>Get to know me</h3>
        <p className='about-content'> <br />My name is Kareena Bhade. I'm a Frontend Web Developer building the Front-end of Websites and Web Applications. Check out some of my work in the Projects section. <br /> <br /> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills then don't hesitate to contact me.</p>
      </div>
      <div className='skll'>
        <h3>My Skills <br /><br /></h3>


        <div className='skill-part'>
    <SkillsCard src={html} content='HTML'/>
    <SkillsCard src={css} content='CSS'/>
    <SkillsCard src={js} content='JS'/>
    </div>
    <div className='skill-part'>
    <SkillsCard src={react} content='REACT'/>
    <SkillsCard src={Cpp} content='C++'/>
    <SkillsCard src={database} content='SQL'/>
    </div>
      </div>
      </div>


      
    </div>
    </div>
    </>
  );
}

export default About
