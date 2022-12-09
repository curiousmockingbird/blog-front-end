import React from 'react';
import SignIn from './SignIn';
import BlogControl from './BlogControl';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<BlogControl />} />
    </Routes>
  </Router>
  );
}

export default App;
