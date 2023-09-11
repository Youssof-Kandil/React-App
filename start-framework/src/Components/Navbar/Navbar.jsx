import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-dark fw-bold fixed-top py-4 z-3">
    <div className='container'>
    <NavLink className="navbar-brand fs-2" to="">START FRAMEWORK</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className = {({isActive})=>{ return isActive? "nav-link me-3 rounded-3 nav-linkActive" : "nav-link me-3 rounded-3"}} to="about">ABOUT <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className = {({isActive})=>{ return isActive? "nav-link me-3 rounded-3 nav-linkActive" : "nav-link me-3 rounded-3"}} to="portfolio">PORTFOLIO</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className = {({isActive})=>{ return isActive? "nav-link me-3 rounded-3 nav-linkActive" : "nav-link me-3 rounded-3"}} to="contact">CONTACT</NavLink>
      </li>

    </ul>
  </div></div>
</nav>
  </>
}
