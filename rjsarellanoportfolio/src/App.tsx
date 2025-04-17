import { useState } from 'react'

import './App.css'
import MainPage from './pages/mainPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
      <Route path ="/main" element={<MainPage/>} />
    </Routes>
      
    </>
  )
}

export default App
