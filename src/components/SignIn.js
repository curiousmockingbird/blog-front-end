import React from "react";
import './../css/SignIn.css';
import { Link } from 'react-router-dom';

function doSignIn(event) {

}
function doSignUp(event) {

}

const SignIn = () => {

  return (
    <>
      <section className='container'>
        <div className="test">
          <Link to="/">Back to welcome page!</Link>
          <h1> Sign in</h1>
          <form onSubmit={doSignIn}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' /><br></br>
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' /><br></br>
            <button type='submit'>Sign in</button>
          </form>
        </div>

      </section>
      <section className='container'>
        <div className="test">
          <h1> Sign up</h1>
          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' /><br></br>
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' /><br></br>
            <button type='submit'>Sign up</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignIn