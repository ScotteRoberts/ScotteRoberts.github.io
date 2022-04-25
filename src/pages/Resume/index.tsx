import React from 'react'
import Page from '../../components/Page'
import resume from '../../assets/docs/ScottRoberts_Resume_032122.pdf'

function Resume() {
  return (
    <Page title="Resume | Scott Roberts">
      <section>
        <a href={resume} download="ScottRoberts_Resume">
          Download Resume
        </a>
        <iframe
          height={800}
          src={resume}
          title="Scott Roberts Software Engineer Resume"
        />
      </section>
    </Page>
  )
}

export default Resume
