import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './../css/LogInHeader.css';

const LogInHeader = () => {
  const [articleCount, setArticleCount] = useState(0);

  //Automatically fetches articles count every 10s from database through endpoint api/articles
  useEffect(() => {
    const loadArticleCount = async () => {
      const response = await axios.get(`/api/articles/`);
      const newArticleCount = response.data;
      setArticleCount(newArticleCount);
    }
    loadArticleCount();

    const interval = setInterval(() => {
      loadArticleCount()
    }, 10000);
    //The interval is cleared when the user navigates to another page
    return()=>clearInterval(interval);

  }, []);
  return (
    
      <div className='test container'>
      <h1> Welcome to the Cuban blog!</h1>
      <h3>{articleCount}</h3>
      <h4>Articles published, and counting</h4>
      <ul>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
      </div>
  );
}
export default LogInHeader