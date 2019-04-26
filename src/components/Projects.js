import React from 'react';
import Project from './Project';
import projectData from '../data/projects';
import '../styles/projects.css';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <ul>
      {projectData.map(project => (
        <li>
          <Project projectData={project} />
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
