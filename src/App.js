import './App.css';

import React from "react";

import ProjectTemplate from './Components/ProjectTemplate';

import ContactUs from './Components/ContactUs';
import AboutMe from './Components/AboutMe';

function App() {

  return (
    <>
      {/*About Me*/}
      <header>
        <AboutMe />
      </header>

      <hr className='line'></hr>

      {/*My Projects*/}
      <section>
        <div className='my-projects'>
          <h2 className='my-projects__title'>My Projects</h2>
          <div className='my-projects__grid-container'>
            <ProjectTemplate 
              title='US-China Strategic Studies Organization Website' 
              description='' 
              website='' 
              code=''
            />
            <ProjectTemplate 
              title='Elliott' 
              description='Named after my International Affairs department, Elliott provides you with the most recent international news of various regions of the world and special topics. In this project, I used HTML, CSS, SASS, JSON, and Javascript along with the NEWS API on the React-based Next.js.'
              website='https://international-affairs-news.vercel.app/' 
              code='https://github.com/austingae/International-Affairs-News'
            />
            <ProjectTemplate 
              title='ECommerce Website (07/15-07/23)' 
              description='https://www.youtube.com/watch?v=4mOkFXyxfsU&ab_channel=JavaScriptMastery' 
              website='' 
              code=''
            />
            <ProjectTemplate 
              title='Project Title' 
              description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.' 
              website='' 
              code=''
            />
            <ProjectTemplate 
              title='Project Title' 
              description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.' 
              website='' 
              code=''
            />
            <ProjectTemplate 
              title='Project Title' 
              description='Cupidatat Lorem cillum nisi irure aute reprehenderit deserunt est irure in laborum anim ea. Nulla tempor sunt id quis id. Dolore et enim incididunt non adipisicing dolor fugiat tempor ea incididunt eu eiusmod do ex.' 
              website='' 
              code=''
            />                                                    
          </div>
        </div>
      </section>
      
      {/*Contact Me*/}
      <section>
        <ContactUs />
      </section>
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
  4) Decorate the HTML elements - Yes. 
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript - Yes. 
  */