import React from 'react';
import { FaHome, FaQuestion } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import Nav from 'react-bootstrap/Nav';
import './../css/output.css';

const NavbarComponent = () => {
  return (
    <Nav className='me-auto justify-content-around'>
      <Nav.Item><Nav.Link href="/"><FaHome/></Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/about"><FaQuestion /></Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/account"><RiAccountCircleFill /></Nav.Link></Nav.Item>
    </Nav>
  )
}

export default NavbarComponent;