import React from 'react'
import scottRobertsIcon from '../../assets/icons/scott_roberts_icon_wedding.png'
import phoneIcon from '../../assets/icons/ic-phone-call.svg'
import emailIcon from '../../assets/icons/ic-email.svg'
import linkedinIcon from '../../assets/icons/ic-linkedin.png'
import githubIcon from '../../assets/icons/ic-github.png'
import './styles.scss'

function Contact() {
  return (
    <section className="contact">
      <img className="avatar" src={scottRobertsIcon} alt="A handsome man" />

      <h2 className="title">Contact Information</h2>
      <nav className="icon-list">
        <a
          className="icon-item"
          href="tel:1-714-833-7051"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scott Roberts Phone Number"
        >
          <img width={64} height={64} src={phoneIcon} alt="Phone Icon" />
          <span>714) 833-7051</span>
        </a>

        <a
          className="icon-item"
          href="mailto:s.e.roberts0@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scott Roberts Email"
        >
          <img width={64} height={64} src={emailIcon} alt="Email Icon" />
          s.e.roberts0@gmail.com
        </a>
        <a
          className="icon-item"
          href="https://www.linkedin.com/in/scott-e-roberts"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scott Roberts LinkedIn"
        >
          <img width={64} height={64} src={linkedinIcon} alt="LinkedIn Icon" />
          View Profile
        </a>

        <a
          className="icon-item"
          href="https://github.com/ScotteRoberts"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scott Roberts GitHub"
        >
          <img width={64} height={64} src={githubIcon} alt="Github Icon" />
          View Profile
        </a>
      </nav>
    </section>
  )
}

export default Contact
