import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/intro/Intro';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}

export default App



