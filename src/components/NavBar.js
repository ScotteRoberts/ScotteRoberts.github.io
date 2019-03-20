import React from 'react';
import { Link } from 'gatsby';
import '../styles/NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul id="nav-list">
            <li id="logo">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#overview">About</Link>
            </li>
            <li>
              <Link to="/#projects">Projects</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
