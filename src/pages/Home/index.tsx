import React from 'react'
import Head from '../../core/Head'
import NavBar from '../../components/NavBar'
import Splash from '../../components/Splash'
import Overview from '../../components/Overview'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Head title="Home | Portfolio" />
      <main>
        <NavBar />
        <Splash />
        <Overview />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default Home
