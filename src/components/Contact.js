import React from 'react';
import '../styles/contacts.css';

const Contact = props => (
  <section id="contact">
    <img src="./img/scott_roberts_icon_wedding.webp" alt="A handsome man" />
    <div>
      <h2>Contact Information</h2>
      <div>
        <a
          className="icon"
          href="tel:1-714-833-7051"
          target="_blank"
          rel="noopener noreferrer"
          alt="Scott Roberts Phone Number"
        >
          <i className="fas fa-mobile-alt" />
        </a>
        <a
          className="icon"
          href="mailto:sroberts@talentpath.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="Scott Roberts Email"
        >
          <i className="far fa-envelope" />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/scott-e-roberts"
          target="_blank"
          rel="noopener noreferrer"
          alt="Scott Roberts LinkedIn"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          className="icon"
          href="https://github.com/ScotteRoberts"
          target="_blank"
          rel="noopener noreferrer"
          alt="Scott Roberts GitHub"
        >
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
