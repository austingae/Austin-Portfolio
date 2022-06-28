import React from 'react'


import './ProjectTemplate.css';

const ProjectTemplate = (props) => {


  return (
    <div className='project'>
      <h3 className='project__title'>{props.title}</h3>
      {/*<img className='project__website-image' src={props.websiteImage}/>*/}
      <p className='project__description'>{props.description}</p>
      <div className='project__buttons-container'>
        <a href={props.website} target='_blank'><button className='project__button'>View the Website</button></a>
        <a href={props.code} target='_blank'><button className='project__button'>View the Code</button></a>
      </div>
    </div>
  )
}

export default ProjectTemplate