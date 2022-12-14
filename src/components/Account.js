import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from './../firebase.js';

const Account = () => {
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
    <div className="account">
      <h3>Account</h3>
      <h3>Sign Out</h3>
      {signOutSuccess}
      <br />
      <button onClick={doSignOut} className='btn btn-primary'>Sign out</button>
    </div>
  )
}

export default Account;