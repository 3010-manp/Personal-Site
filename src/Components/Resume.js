import React from 'react'
import './resume.css'

import {CgAwards} from 'react-icons/cg'



const Resume = () => {
    
  return (
    <div className='resume'>
        <div className='resume-heading'>
            <h1>
                Resume
            </h1>
        </div>
        <div className='resume-sub-headings'>
        <ul>
        <li><a href='#education'>Education</a></li>
        <li><a href='#work'>Work Experience</a></li>
        <li><a href='#awards'>Awards</a></li>
        <li><a href='#courses'>Courses</a></li>
        <li><a href='#references'>References</a></li>
        </ul>
        </div>

        <section id='education'>
        <h1> Education</h1>
        <hr />
        <div className='education1'>
        <h3>University of Calgary</h3>
        <span>Sept 2019 - Present</span>
        <br />
        <span className='degree'>Bachelor of Science, Software Engineering </span> 
        <br />
        <b>GPA: 3.9/4.0</b>
        </div>
        <div className='education2'>
        <h3>Sheridan College, Brampton, ON</h3>
        <span>Jan 2015 - Dec 2016</span>
        <br />
        <span className='degree'>Diploma, Mechanical Engineering Technician </span> 
        <br />
        <b>GPA: 3.98/4.0</b>
        </div>
        </section>

        <section id="work">
        <h1> Work Experience</h1>
        <hr />
        <div className='work1'>
        <h3>University of Calgary, Calgary, AB</h3>
        <span>May 2022 - Jun 2022</span>
        <br />
        <span className='title'><em>Teaching Assistant of Principal of Operating System-CPSC 457</em></span> 
        <br />
        <br />
        <ul>
            <li>Developed programming materials, demonstrations, and exercises in C++ on multi-threading concepts</li>
            <li>Helped students debug and optimize code in C++</li>
            <li>Explained relevant topics related to assignments to the students</li>
            <li>Helped the professor in marking some of the programming assessments</li>
        </ul>
        </div>
        <div className='work1'>
        <h3>Skip The Dishes, Calgary, AB</h3>
        <span>Jan 2020 - Apr 2022</span>
        <br />
        <span className='title'><em>Delivery Courier / Driver </em></span> 
        <br />
        <br />
        <ul>
            <li>Attained high productivity while working within tight timelines whilst being highly flexible</li>
            <li>Picked up food items for customers from various restaurants as specified per the orders, while delivering the food order at the customer location under Covid 19 safety protocols </li>
            <li>Coordinated and managed multiple projects that support Operational Excellence </li>
            <li>Maintained contact and followed up on problems that required special handling</li>
        </ul>
        </div>
        <div className='work2'>
        <h3>Walmart Canada, Okotoks, AB</h3>
        <span>Dec 2017 - Aug 2019</span>
        <br />
        <span className='title'><em>Customer Service Associate</em></span> 
        <br />
        <br />
        <ul>
            <li>Coordinated and monitored processes, tasks, and functional procedures diligently</li>
            <li>Routinely worked in the food section, while sorting, shelving, and organizing various food items as per the aisles, adhering to safety and hygiene protocols at all times</li>
            <li>Maintained quality service by following company policy and procedures </li>
            <li>Created strong relationships and viable connections with vendors and dealers</li>
            <li>Contributed to team effort by accomplishing productivity goals, targets, and team objectives</li>
        </ul>
        </div>
        </section>

        <section id="awards">
        <h1> Awards </h1>
        <hr />
        <div className='awards-container'>     
        <div className='a1'>
        <CgAwards size={100}/>
        <br />
        <span> Dean List Award (Winter 2022)</span>
        </div>
        <div className='a1'>
        <CgAwards size={100}/>
        <br />
        <span>Engineering Class of 1970 Memorial Scholarship</span>
        </div>
        <div className='a1'>
        <CgAwards size={100}/>
        <br />
        <span>Louise McKinney Scholarships (Alberta Scholarship Programs)</span>
        </div>
        </div>
        </section>
        
        <section id="courses">
        <h1>Courses</h1>
        <hr />
        <div className='course-container'>
        <div className='c1'> 
        <span><b>CPSC 319:  </b>DATA STRUCTURES AND ALGORITHMS</span>
        </div>
        <div className='c1'>
        <span ><b>CPSC 471:  </b>DATA BASE MANAGEMENT SYSTEMS</span>
        </div>
        <div className='c1'>
        <span><b>ENSF 480:  </b>PRINCIPLES OF SOFTWARE DESIGN</span>
        </div>
        <div className='c1'>
        <span><b>ENSF 409:  </b>PRINCIPLES OF SOFTWARE DEVELOPMENT</span>
        </div>
        <div className='c1'>
        <span><b>ENSF 337:  </b>PROGRAMMING FUNDAMENTALS</span> 
        </div>
        <div className='c1'>
        <span><b>CPSC 457:  </b>PRINCIPLES OF OPERATING SYSTEMS</span>   
        </div>
        <div className='c1'>
        <span><b>SENG 513:  </b>WEB-BASED SYSTEMS</span>    
        </div>
        <div className='c1'>
        <span><b>ENCM 369:  </b>COMPUTER ORGANIZATION</span> 
        </div>
        <div className='c1'>
        <span><b>ENCM 511:  </b>EMBEDDED SYSTEM INTERFACING</span>  
        </div>
        <div className='c1'>
        <span><b>SENG 471:  </b>SOFTWARE REQUIREMENT ENGINEERING</span>
        </div>
        <div className='c1'>
        <span><b>SENG 401:  </b>SOFTWARE ARCHITECTURE</span>
        </div>
        <div className='c1'>
        <span><b>SENG 438:  </b>SOFTWARE QUALITY AND TESTING</span>
        </div>
        </div>
        </section>
        <section id="references">
        <h2>References Available Upon Request</h2>  
        </section>
    </div>
  )
}

export default Resume