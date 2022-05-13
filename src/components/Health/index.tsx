import React from 'react'

function Health() {
  return (
    <>
      <span className="summary">
        <em>[tl;dr]</em>
        <p className="tab">
          A good night&apos;s rest, proper hydration, a balanced diet, and
          stretching will lead to a happier life.
        </p>
      </span>
      <p>
        Health is an important factor of everyone’s life and should be
        highlighted. According to WellSteps, a blog dedicated providing
        education on employee wellness solutions, a healthy employee has:
      </p>
      <ul className="icon-list">
        <li>
          <i className="fas fa-user-check" style={{ color: 'green' }} />
          Improved Behavior
        </li>
        <li>
          <i className="fas fa-business-time" style={{ color: 'green' }} />
          Improved Productivity
        </li>
        <li>
          <i className="fas fa-user-md" style={{ color: 'red' }} />
          Less Cost in Medical Coverage
        </li>
      </ul>
      <p>
        I take personal pride in living a healthy, active lifestyle and practice
        healthy habits during work and personal hours.
      </p>
    </>
  )
}

export default Health
