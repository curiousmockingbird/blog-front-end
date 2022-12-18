import React from "react";
import './../css/output.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload();
  }

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/');
    } catch (e) {
      setError(e.message)
    }
  }
  if (error) {
    return (
    <>
    <div className='alert alert-danger' role='alert'>
      <p>{error}</p>
      <h5>Try again</h5>
    </div>
    <div>
      <Link to="/sign-in"> {<button onClick={refreshPage}>Back to sign in page</button>} </Link>
    </div>
    </>
    )
  } else {
    return (
      <>
      <div className='sign-in-parent'>
          <div className="sign-in responsive-test">
            <Link to="/">Back to welcome page!</Link>
            <h1> Sign in</h1>
            {error && <p className="error">{error}</p>}
              <input
                type='text'
                name='signinEmail'
                placeholder='email' 
                value={email}
                onChange={e => setEmail(e.target.value)}/><br></br>
              <input
                type='password'
                name='signinPassword'
                placeholder='Password' 
                value={password}
                onChange={e => setPassword(e.target.value)}/><br></br>
              <button onClick={logIn} className='btn btn-outline-primary'>Sign in</button><br></br>
            <Link to="/sign-up">Sign up if you don't have an account yet!</Link>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn