import './App.css';

import React from "react";

import profileImage from './Images/profile-image.jpeg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import myResume from './PDF/Resume.pdf';

import ProjectTemplate from './Components/ProjectTemplate';


import emailjs from '@emailjs/browser';

import ContactUs from './Components/ContactUs';

function App() {

  return (
    <>
      <header>
        <div className='about-me'>
            <h1 className='about-me__my-name'>Hello! <br></br>I am Austin Gae.</h1>
            <img className='about-me__profile-image' src={profileImage}/>
            <p className='about-me__my-short-description'>Eiusmod ipsum veniam laborum veniam quis minim consequat sit consectetur nisi eu exercitation adipisicing. Voluptate veniam magna nostrud commodo minim ipsum officia exercitation ad voluptate. Nulla duis mollit laborum excepteur eiusmod ea nulla sit. Labore duis eu exercitation sunt velit aliqua occaecat ullamco dolore velit aliqua laborum.</p>
            <div className='about-me__social-media-container'> 
              <a href='https://www.linkedin.com/in/austin-gae/'><FontAwesomeIcon className='about-me__social-media-icon about-me__linkedin' icon={faLinkedin} size="2x"/></a>
              <a href='https://github.com/austingae'><FontAwesomeIcon className='about-me__social-media-icon about-me__github' icon={faGithub} size="2x"/></a>
              <a href='mailto:austingae@gmail.com'><FontAwesomeIcon className='about-me__social-media-icon about-me__email' icon={faEnvelope} size="2x"/></a>
            </div>
            <div className='about-me__resume-container'>
              <a href={myResume} target='_blank'><FontAwesomeIcon className='about-me__resume' icon={faFile} size="2x" /></a>
              <a className='about-me__view-my-resume' href={myResume} target='_blank'>View my Resume</a>
            </div>
        </div>
      </header>

      <hr className='line'></hr>

      <main>
        <div className='my-projects'>
          <h2 className='my-projects__title'>My Projects</h2>
          <ProjectTemplate title='Lorem Title' description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.'/>
          <ProjectTemplate title='Lorem Title' description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.'/>
          <ProjectTemplate title='Lorem Title' description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.'/>
          <ProjectTemplate title='Lorem Title' description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.'/>
          <ProjectTemplate title='Lorem Title' description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.'/>
          <ProjectTemplate title='Lorem Title' description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.'/>
        </div>
      </main>

      <hr className='line'></hr>
      
      <ContactUs />
    </>
  );
}

export default App;

/*
HTML & CSS & Javascript Approach: 
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  - 
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements - Yes. 
  4) Decorate the HTML elements - 
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript 
  */