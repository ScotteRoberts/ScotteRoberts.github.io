import React from 'react'
import { NavLink } from 'react-router-dom'
import resume from '../../assets/docs/ScottRoberts_Resume.pdf'
import './styles.scss'

function DropdownSections() {
  return (
    <ul className="mobile">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="dropdown">
        <button aria-haspopup="menu" type="button" className="dropdown-button">
          Sections &#9662;
        </button>
        <ul aria-label="submenu" className="dropdown-content">
          <li>
            <NavLink to="/#overview">About</NavLink>
          </li>
          <li>
            <NavLink to="/#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/#contact">Contact</NavLink>
          </li>
        </ul>
      </li>
    </ul>
  )
}

function ExpandedSections() {
  return (
    <ul className="not-mobile">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/#overview">About</NavLink>
      </li>
      <li>
        <NavLink to="/#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/#contact">Contact</NavLink>
      </li>
    </ul>
  )
}

function NavBar() {
  return (
    <header>
      <nav role="navigation">
        <ExpandedSections />
        <DropdownSections />
        <ul>
          <li>
            <NavLink to="/blog/">Blog</NavLink>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
