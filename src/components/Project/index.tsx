import React from 'react'
import { ProjectProps } from './types'
import './styles.scss'

function Project({ projectData }: ProjectProps) {
  const { title, type, description, action, url, img } = projectData
  return (
    <div className="project">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="img-link"
      >
        <img src={img.src} alt={`${title} Screenshot`} />
      </a>
      <h3>{`${title} | ${type}`}</h3>
      <h4>{`${description}`}</h4>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {`${action}`} <i className="fas fa-chevron-right" />
      </a>
    </div>
  )
}

export default Project
