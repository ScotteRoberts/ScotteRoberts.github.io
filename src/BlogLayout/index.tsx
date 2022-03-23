import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function BlogLayout({ children }) {
  return (
    <main>
      <NavBar />
      <article>{children}</article>
      <Footer />
    </main>
  )
}

export default BlogLayout
