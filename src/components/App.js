import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import BlogControl from './BlogControl';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInHeader from './LogInHeader';

const App = () => {
  const [articleInfo, setArticleInfo] = useState(0);

  //Automatically fetches articles count every 10s from database through endpoint api/articles
  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
    loadArticleInfo();

    const interval = setInterval(() => {
      loadArticleInfo()
    }, 10000);
    //The interval is cleared when the user navigates to another page
    return()=>clearInterval(interval);

  }, []);

  return (
    <Router>
    <h1>{articleInfo}</h1>
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
