import { useState } from 'react';
import './../css/LogInHeader.css';
import { signOut } from 'firebase/auth';
import { auth } from './../firebase.js';
import PropTypes from "prop-types";

const Welcome = (props) => {
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (      
    <section className='container'>
    <div className="test">
      <h1> Welcome<br></br>{props.userEmail}!</h1>
      <h1>Sign Out</h1>
    {signOutSuccess}
    <br />
    <button onClick={doSignOut}>Sign out</button>
    </div>
    </section>
  )
}
Welcome.propTypes = {
  userEmail: PropTypes.string.isRequired
};

export default Welcome;