import React from 'react'
import skillData from './skillData'
import { SkillBar } from 'react-skillbars'
import './bar.css'

const Bar = () => {
  return (
    <div className='skill-box'>
      <div>
        <pre>
          <br />
        </pre>
      </div>
      <SkillBar skills={skillData} />
    </div>
  )
}

export default Bar