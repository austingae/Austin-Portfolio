import React from 'react'

import profileImage from '../Images/profile-image.jpeg';

import myResume from '../my-resume.pdf';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import './AboutMe.css';

import { useState } from 'react';

const AboutMe = () => {
  let [isResumeIconHover, setIsResumeIconHover] = useState(false);
  let [isEmailIconHover, setIsEmailIconHover] = useState(false);
  let [isGitHubIconHover, setIsGitHubIconHover] = useState(false);
  let [isLinkedInIconHover, setIsLinkedInIconHover] = useState(false);

  return (
    <div className='about-me'>
      <h1 className='about-me__my-name'>Hello! <br></br>I am Austin Gae.</h1>
      <img className='about-me__profile-image' src={profileImage}/>
      <p className='about-me__my-short-description'>I am a front-end web developer, who understands HTML, CSS and SASS, Javascript, ReactJS, and JSON to create awesome websites. I am also comfortable with Git and GitHub to work with other developers in a team. Now, don't just take my word for it, take a look at my projects! </p>
      <div className='about-me__social-media-container'> 
        <a href='https://www.linkedin.com/in/austin-gae/'>
          <FontAwesomeIcon 
          className='about-me__social-media-icon about-me__linkedin' 
          icon={faLinkedin} 
          size="2x"           
          onMouseOver={() => {setIsLinkedInIconHover(true);}} 
          onMouseOut={() => {setIsLinkedInIconHover(false)}} 
          bounce={isLinkedInIconHover}  />
          </a>
        <a href='https://github.com/austingae'>
          <FontAwesomeIcon 
          className='about-me__social-media-icon about-me__github' 
          icon={faGithub} 
          size="2x"          
          onMouseOver={() => {setIsGitHubIconHover(true);}} 
          onMouseOut={() => {setIsGitHubIconHover(false)}} 
          bounce={isGitHubIconHover}/>
        </a>
        <a href='mailto:austingae@gmail.com'>
          <FontAwesomeIcon 
          className='about-me__social-media-icon about-me__email' 
          icon={faEnvelope} 
          size="2x"          
          onMouseOver={() => {setIsEmailIconHover(true);}} 
          onMouseOut={() => {setIsEmailIconHover(false)}} 
          bounce={isEmailIconHover}/>
          </a>
      </div>
      <div className='about-me__resume-container'>
        <a href={myResume} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon 
          className='about-me__resume' 
          icon={faFile} size="2x" 
          onMouseOver={() => {setIsResumeIconHover(true);}} 
          onMouseOut={() => {setIsResumeIconHover(false)}} 
          bounce={isResumeIconHover}
          />
        </a>
        <a className='about-me__view-my-resume' href={myResume} target='_blank' rel='noreferrer'>View my Resume</a>
      </div>
</div>
  )
}

export default AboutMe