import React from 'react'
import { Helmet } from 'react-helmet'

function Head({ title }: { title: string }) {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="../assets/img/favicon.ico"
      />
      <meta
        name="Description"
        content="Creator: Scott Roberts, Role: Full-Stack Engineer Consultant, Company: WarnerMedia"
      />
      <title>{title}</title>
    </Helmet>
  )
}

// Head.propTypes = {
//   title: PropTypes.string.isRequired
// }

export default Head
