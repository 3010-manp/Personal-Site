import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import './footer.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: "white", marginRight: "1rem" }} />
                <a href="mailto: manpreetsingh1500@gmail.com">manpreetsingh1500@gmail.com</a>
                </h4>
            </div>
            </div>
            <div className='right'> 
            <p>Copyright @ Manpreet Singh</p>
            <div className='icons'>
            <a target="_blank" href="https://github.com/3010-manp" ><AiFillGithub className='git' size={30} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/manpreet-singh-89954210b/" ><AiFillLinkedin className='git' size={30} /></a>
            </div>
            </div>
            <div className='developerInfor'>
                <span><b>Developer: Manpreet Singh</b></span>
            </div>
        </div>
    </div>
  )
}

export default Footer