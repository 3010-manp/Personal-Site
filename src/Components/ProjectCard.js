import React from 'react'
import './projectCard.css'
import { NavLink } from 'react-router-dom'


const ProjectCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imagesrc}></img>
    <h2 className='project-title'>{props.title}</h2>
    <div className='project-details'>
        <p>{props.text}</p>
        <div className='buttons'>
            <a target = "_blank" href={props.view} className="btn">View Source</a>
        </div>
    </div>
    </div>
    )
}

export default ProjectCard