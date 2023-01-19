import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimage2 from '../Components/Heroimage2'
import AboutMe from '../Components/AboutMe'
import Resume from '../Components/Resume'

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="ABOUT ME" />
      <AboutMe />
      <Resume />
      <Footer />
    </div>
  )
}

export default About