import React from 'react'
import './about.css'
import SkillsCard from '../SkillsCards/SkillsCard';

function About() {
  return (
    <>
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
    <SkillsCard src='src\images\html.png' content='HTML'/>
    <SkillsCard src='src\images\csss.png' content='CSS'/>
    <SkillsCard src='src\images\js.png' content='JS'/>
    </div>
    <div className='skill-part'>
    <SkillsCard src='src\images\react.png' content='REACT'/>
    <SkillsCard src='src\images\Cpp.png' content='C++'/>
    <SkillsCard src='src\images\database.png' content='SQL'/>
    </div>
      </div>
      </div>
      
    </div>
    </div>
    </>
  );
}

export default About
