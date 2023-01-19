import React, {useState} from "react";
import "./index.css";
import Home from "./Routes/Home.js";
import Contact from "./Routes/Contact.js";
import About from "./Routes/About.js";
import Project from "./Routes/Project.js";
import Skills from './Routes/Skills.js'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/project" element= {<Project />} />
        <Route path="/skills" element= {<Skills />} />
        <Route path="/about" element= {<About />} />
        <Route path="/contact" element= {<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
