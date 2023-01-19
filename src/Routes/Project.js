import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimage2 from '../Components/Heroimage2'
import Projects from '../Components/Projects'

const Project = () => {
  return (
    <div>
    <Navbar />
    <Heroimage2 heading="PROJECTS" text = "Some of my most recent works" />
    <Projects />
    <Footer />
    </div>
  )
}

export default Project