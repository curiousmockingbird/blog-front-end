import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from './../firebase.js';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser.js';

const Account = () => {
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const { user } = useUser();

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <div className="account">
      <div className='d-flex justify-content-center'>
        <h6>Bookmarked articles and other up-coming features here</h6>
      </div>
      <div className='d-flex justify-content-center'>
        <h3>Sign Out</h3>
      </div>
      <div className='d-flex justify-content-center'>
      <p>{signOutSuccess}</p>
      </div>
      <div className='d-flex justify-content-center'>
      {user
      ? <button onClick={doSignOut} className='btn btn-primary'>Sign out</button>
      : <Link to='/sign-in'> {<button>Back to sign in page</button>} </Link>}
      </div>
    </div>
  )
}

export default Account;