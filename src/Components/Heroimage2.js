import "./heroimage2.css"
import React from 'react'


const Heroimage2 = (props) => {

  const image = props.imagesrc;

  return (
    <div className="hero-img">   
    <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
    </div>

    </div>
  )
}

export default Heroimage2