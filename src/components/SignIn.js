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



  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/');
    } catch (e) {
      setError(e.message)
    }
  }
  return (
    <>
        <div className="sign-in container">
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
            <button onClick={logIn}>Sign in</button><br></br>
          <Link to="/sign-up">Sign up if you don't have an account yet!</Link>
        </div>
    </>
  )
}

export default SignIn