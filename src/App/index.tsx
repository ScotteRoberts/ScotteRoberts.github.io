import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/404'
import './styles.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
