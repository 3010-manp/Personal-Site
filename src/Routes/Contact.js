import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimage2 from '../Components/Heroimage2'
import { ContactMe } from '../Components/ContactMe'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="Contact" text="Lets have a chat" />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Contact