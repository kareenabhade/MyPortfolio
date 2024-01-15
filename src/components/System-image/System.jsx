import React from 'react'
import './system.css'
import books from '../images/stack-of-books.png'
import programming from '../images/programming.png'
import software from '../images/software.png'
import div from '../images/div.png'
import phone from '../images/phone.png'

function System() {
  return (
    <>
    <div className='image-container'>
    <img  className='books' src={phone}></img>
    <img className='programming' src={programming}></img>
    <img className='software' src={software}></img>
    <img className='div' src={div}></img>
    <img className='phone' src={phone}></img>
    </div>
    
    </>
   
  )
}

export default System