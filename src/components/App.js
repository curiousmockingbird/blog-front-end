import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import BlogControl from './BlogControl';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInHeader from './LogInHeader';

const App = () => {

  return (
    <Router>
    <LogInHeader />
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      {/* <Route path="/" element={<BlogControl />} /> */}
    </Routes>
    </Router>
    );
}

export default App;
