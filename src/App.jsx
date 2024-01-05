import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/intro/Intro';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects';
import ResponsiveNavBar from './components/ResponsiveNavbar/ResponsiveNavbar.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

// <ResponsiveNavBar />

// <Navbar />
//       <Intro />
//       <About />
//       <Projects />
//       <Contacts />



