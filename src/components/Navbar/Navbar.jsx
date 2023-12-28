import React  from 'react'
import {Link} from 'react-scroll'
import './navbar.css'

function Navbar() {
  
    return (
     <> <div className='navbar'>
     <div className='logo-name'>
     <img className='logo' src='src\images\k.png' alt='logo' />
     <p className='kareena-bhade'>Kareena Bhade</p>
     </div>
     
     <div className='box-component'>
     <ul>
     <li><Link activeClass='active'  to="home-page" spy={true} smooth={true} offset={-200} duration={500} className='nav-components' id='home' >Home</Link></li>
     <li><Link activeClass='active'  to="about-page" spy={true} smooth={true} offset={-100} duration={500} className='nav-components' id='about' >About</Link></li>
     <li><Link activeClass='active'  to="projects-page" spy={true} smooth={true} offset={-100} duration={500} className='nav-components' id='projects' >Projects</Link></li>
     <li><Link activeClass='active'  to="contacts-page" spy={true} smooth={true} offset={-200} duration={500} className='nav-components' id='contacts' >Contacts</Link></li>
     </ul>
     </div>
   </div>
</>
    )

}

export default Navbar