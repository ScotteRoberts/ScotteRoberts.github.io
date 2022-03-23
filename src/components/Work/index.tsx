import React from 'react'

function Work() {
  return (
    <>
      <h3>
        <i className="fas fa-code-branch" />
        <span className="tab">Work</span>
      </h3>
      <span className="summary">
        <em>[tl;dr]</em>
        <p className="tab">
          I am a practicing <strong>Full-Stack Engineer</strong> with a
          technical background and experience in managerial positions.
        </p>
      </span>
      <p>
        Currently, I am a Full-Stack Engineer employed at {` `}
        <strong>Talent Path</strong> (division of Genuent). Each engineer must
        apply proven leadership qualities, demonstrate their ability to
        collaborate, and finish required tasks with excellence (
        <a href="https://www.youracclaim.com/badges/b9bcfbd9-be9f-4ba0-af44-668bdb1cca65/public_url">
          Click to view my certificate
        </a>
        ). In addition to my technical training, I worked seven full-time
        summers for the California Junior Lifeguard Programs (CAJG) as a
        Lifeguard Instructor and for two of those summers as the Managing
        Director.
      </p>
      <p>Skills I will apply in your company are:</p>
      <ul className="icon-list">
        <li>
          <i className="fas fa-comments" /> Team Communication
        </li>
        <li>
          <i className="fas fa-hourglass-half" /> Time Management
        </li>
        <li>
          <i className="fas fa-lightbulb" /> Problem Solving
        </li>
        <li>
          <i className="fas fa-clipboard-list" />
          Strategic Planning
        </li>
        <li>
          <i className="fas fa-chalkboard-teacher" />
          Public Speaking
        </li>
        <li>
          <i className="fas fa-graduation-cap" />
          Quick Learning
        </li>
      </ul>
    </>
  )
}

export default Work
