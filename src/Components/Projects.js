import React from 'react'
import './projectCard.css'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectsData'

const Projects = () => {
  return (
    <div className='work-container'>
        <div className='project-container'>
           {ProjectData.map((val, index) => {
            return (
                <ProjectCard 
                    key={index}
                    imagesrc={val.imagesrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                />
            )
           })}
        </div>
    </div>
    )


}

export default Projects