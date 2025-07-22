import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="nav-main">
        <div className="logo"> <img src= "./logoo.png"/> </div>
        <div className="nav-items">
          <a className="nav-item" href="#home">Home</a>
          <a className="nav-item" href="#about">About</a>
          <a className="nav-item" href="#projects">Projects</a>
          <a className="nav-item" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
