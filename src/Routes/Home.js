import React, {useState} from 'react'
import Navbar from '../Components/Navbar.js'
import Heroimage from '../Components/Heroimage.js'
import Footer from '../Components/Footer.js'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimage />
        <Footer />
    </div>
  )
}

export default Home