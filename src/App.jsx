import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


{/* <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </BrowserRouter> */}


