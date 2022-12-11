import React from 'react';
import BlogControl from './BlogControl';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogControl /> } />
        <Route path="/sign-in" element={<SignIn /> } />
        <Route path="/sign-up" element={<SignUp /> } />
      </Routes>
    </Router>
    );
}

export default App;
