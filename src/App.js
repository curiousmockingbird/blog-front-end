import React from 'react';
// import SignIn from './SignIn';
// import BlogControl from './BlogControl';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [articleInfo, setArticleInfo] = useState(0);

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
    loadArticleInfo();
  });

  return (
    <h1>{articleInfo}</h1>
  //   <Router>
  //   <Routes>
  //     <Route path="/sign-in" element={<SignIn />} />
  //     <Route path="/" element={<BlogControl />} />
  //   </Routes>
  // </Router>
  );
}

export default App;
