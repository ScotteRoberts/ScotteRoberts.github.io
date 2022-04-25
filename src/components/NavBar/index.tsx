import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

function NavBar() {
  return (
    <header>
      <nav role="navigation">
        <ul className="not-mobile">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
