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
              title='Elliott' 
              description='Named after my International Affairs department, Elliott provides you with the most recent international news of various regions of the world and special topics. In this project, I used HTML, CSS, SASS, JSON, and Javascript along with the NEWS API on the React-based Next.js.'
              website='https://international-affairs-news.vercel.app/' 
              code='https://github.com/austingae/International-Affairs-News'
            />
            <ProjectTemplate 
              title="coup d&apos;etat" 
              description='Using a database on military coups, this website uses ChartJS to showcase the coup data in an easy to understand manner. This website also has flashcards to learn some interesting coup facts.' 
              website='https://coup-d-etat.vercel.app/' 
              code='https://github.com/austingae/coup-d-etat'
            />
            <ProjectTemplate 
              title='USCSSO (Work In Progress)' 
              description='USCSSO, also known as the US-China Strategic Studies Organization, is a club at my university. This project will be used by the club once it is finished.'
              website='https://uscsso.vercel.app/' 
              code='https://github.com/austingae/USCSSO'
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