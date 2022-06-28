import React from 'react'

import './ProjectTemplate.css';

const ProjectTemplate = (props) => {
  return (
    <div className='project'>
      <h3 className='project__title'>{props.title}</h3>
      {/*<img className='project__website-image' src={props.websiteImage}/>*/}
      <p className='project__description'>{props.description}</p>
      <div className='project__buttons-container'>
        <button className='project__button'>View the Website</button>
        <button className='project__button'>View the Code</button>
      </div>
    </div>
  )
}

export default ProjectTemplate