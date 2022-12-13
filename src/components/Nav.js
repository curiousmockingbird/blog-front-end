import React from 'react';
import { Link } from 'react-router-dom';
import './../css/output.css';

const Nav = () => {
  return (
    <div className='container navbar'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/">Account</Link>
    </div>
  )
}

export default Nav;