import React from 'react'
import './heroimage.css'
import {Link} from 'react-router-dom'
import PersonalImage from '../assets/Digital_Photo_Manpreet_Singh.JPG'

const Heroimage = () => {
  return (
    
    <div className='hero'>
     <div className='welcome'>
            <h1>Welcome to my Website</h1>
    </div>
    <div className='im-content'>
        <div className='content'>
            <h1>Hi, I am Manpreet Singh. </h1>
            <span>I am Software Engineering 
            Student at <b>University of Calgary.</b></span>
            <br />
            <br />
            <span>Currently, I am doing my final year at the University.</span> 
            
            <p>Please feel free to read about my Achievements and Projects</p>
        </div>
    <div className='image'>
    <img className= "image-size" src={PersonalImage} />
    </div>
    </div> 
    </div>
  )
}

export default Heroimage