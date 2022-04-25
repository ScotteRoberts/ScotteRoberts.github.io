import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import NotFound from '../pages/404'
import './styles.scss'
import ContactPage from '../pages/Contact'
import ProjectsPage from '../pages/Projects'
import ResumePage from '../pages/Resume'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
