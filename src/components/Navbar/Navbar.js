import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return(
    <nav className='container'>
      <ul className='nav-links'>
        <li><a href="/">Work</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
