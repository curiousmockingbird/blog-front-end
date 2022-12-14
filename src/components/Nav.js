import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaQuestion } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import './../css/output.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <Link to="/"><FaHome /></Link>
      <Link to="/about"><FaQuestion /></Link>
      <Link to="/account"><RiAccountCircleFill /></Link>
    </div>
  )
}

export default Nav;