import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer' 
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
    < Route path='/' element={<Home/>} />
      </Routes>
    </div>
     <Footer /> 
    </>
  )
}

export default App
