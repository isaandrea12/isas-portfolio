import React from 'react';
import projects from '../assests/functions/projects';

const Projects = () => {
  return (
    <div className='container' id='projects'>
      <hr />
      <h1 className='projectTitle'>Projects</h1>
      <div className='projectsContainer'>
        <br />
        {projects.map((project, index) => {
          return (
            <div className='projectContainer' key={index}>
              <h3>{project.name}</h3>
              <img src={project.src} alt='home' />
              <div className='btnContainer'>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button>Live</button>
                </a>
                <a href={project.git} target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
