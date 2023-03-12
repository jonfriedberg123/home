import React from 'react';
import {Link, } from 'react-router-dom';



function NavBar() {
  
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span>
     <i className= "fas fa-bars" style={{ color: '#fff'}} />
    </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
       
        <Link className="nav-link text-white text-uppercase ml-5" to="/home"></Link>
      </li>
      <li>
        <Link className="nav-link text-white text-uppercase ml-5" to="/about">About</Link>
      </li>
      <li>
        <Link className="nav-link text-white text-uppercase ml-5" to="/web-development">Web Development</Link>
      </li>
      <li>
        <Link className="nav-link text-white text-uppercase ml-5" to="/illustrations">Illustrations</Link>
      </li>
      <li>
        <Link className="nav-link text-white text-uppercase ml-5" to="/3d-models">3D Models</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/graphic-design">Graphic Design</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/animation">Animation</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/sound-design">Sound Design</Link>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default NavBar;