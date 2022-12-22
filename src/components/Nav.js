import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaQuestion } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import './../css/output.css';

const Nav = () => {
  return (
      <div className='row'> 
      <ul className='navbar'>
        <li><Link to="/"><FaHome/></Link></li>
        <li><Link to="/about"><FaQuestion /></Link></li>
        <li><Link to="/account"><RiAccountCircleFill /></Link></li>
      </ul>
      </div>
  )
}

export default Nav;