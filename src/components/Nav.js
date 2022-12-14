import React from 'react';
import { Link } from 'react-router-dom';
import './../css/output.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/account">Account</Link>
    </div>
  )
}

export default Nav;