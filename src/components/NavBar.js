import React from 'react';
import { Link } from 'gatsby';
import resume from '../assets/docs/ScottRoberts_Resume_101118.pdf';
import '../styles/NavBar.css';

const NavBar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/#overview" className="dropdown-button">
            Sections &#9662;
          </Link>
          <div className="dropdown-content">
            <Link to="/#overview">About</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
