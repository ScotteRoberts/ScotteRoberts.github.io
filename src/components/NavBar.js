import React from 'react';
import { Link } from 'gatsby';
import resume from '../assets/docs/ScottRoberts_Resume.pdf';
import '../styles/NavBar.scss';

const blur = e => {
  const { currentTarget } = e;
  currentTarget.blur();
};

const NavBar = () => (
  <header>
    <nav role="navigation">
      <ExpandedSections />
      <DropdownSections />
      <ul>
        <li>
          <Link to="/blog/" activeClassName="active" onClick={blur}>
            Blog
          </Link>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noopener noreferrer" onClick={blur}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

const DropdownSections = () => (
  <ul className="mobile">
    <li>
      <Link to="/" activeClassName="active" onClick={blur}>
        Home
      </Link>
    </li>
    <li className="dropdown">
      <button aria-haspopup="true" className="dropdown-button">
        Sections &#9662;
      </button>
      <ul aria-label="submenu" className="dropdown-content">
        <li>
          <Link to="/#overview" onClick={blur}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#projects" onClick={blur}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/#contact" onClick={blur}>
            Contact
          </Link>
        </li>
      </ul>
    </li>
  </ul>
);

const ExpandedSections = () => (
  <ul className="not-mobile">
    <li>
      <Link to="/" activeClassName="active" onClick={blur}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/#overview" onClick={blur}>
        About
      </Link>
    </li>
    <li>
      <Link to="/#projects" onClick={blur}>
        Projects
      </Link>
    </li>
    <li>
      <Link to="/#contact" onClick={blur}>
        Contact
      </Link>
    </li>
  </ul>
);

export default NavBar;
