import React from 'react';
import { Link } from 'gatsby';
import '../styles/NavBar.css';

const NavBar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
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
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <a href="docs/ScottRoberts_Resume_101118.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
