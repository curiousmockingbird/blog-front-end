import './../css/output.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        await createUserWithEmailAndPassword(getAuth(), email, password)
        navigate('/sign-in');
    } catch (e) {
      setError(e.message)
    }
  }


  return (
    <>
    <div className='sign-in-parent'>
        <div className="sign-in ">
          <Link to="/">Back to welcome page!</Link>
          <h1> Sign up!</h1>
          {error && <p className="error">{error}</p>}
            <input
              type='text'
              name='signupEmail'
              placeholder='email' 
              value={email}
              onChange={e => setEmail(e.target.value)}/><br></br>
            <input
              type='password'
              name='Signup Password'
              placeholder='Password' 
              value={password}
              onChange={e => setPassword(e.target.value)}/><br></br>
            <input
              type='password'
              name='signupPassword'
              placeholder='Confirm Password' 
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}/><br></br>
            <button onClick={createAccount} className='btn btn-primary'>Sign up</button><br></br>
            <pre>
            <Link to="/sign-in">Back to sign in page!</Link>
            </pre>

        </div>
      </div>
    </>
  )
}

export default SignUp