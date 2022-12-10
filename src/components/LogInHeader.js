import React from 'react';
import { Link } from "react-router-dom";

const LogInHeader = () => {
  return (
    <React.Fragment>
      <h1> Help Queue</h1>
      <ul>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
export default LogInHeader