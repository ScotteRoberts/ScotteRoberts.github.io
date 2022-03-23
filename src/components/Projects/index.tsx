import React from 'react'
import Project from '../Project'
import projectObj from '../data/projects'
import '../styles/projects.scss'

function Projects() {
  const projects = Object.values(projectObj)
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, i) => (
          <li key={i}>
            <Project projectData={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
