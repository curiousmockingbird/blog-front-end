import React from "react";
import SignIn from "./SignIn";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/LogInHeader.css';

const BlogControl = () => {
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

  const handleClick = () => {
    // setLogInHeaderVisible(false);
  }
  return (
    <>
    <SignIn />
    <section className='container'>
    <div className="test">
      <h1> Welcome to the Cuban blog!</h1>
      <h3>{articleCount}</h3>
      <h4>Articles published, and counting</h4>
      <ul>
        <li>
          <p>{<button onClick={handleClick}>Sign In / Sign Up</button>}</p>
        </li>
      </ul>
    </div>
    </section>
    </>
  )
}

export default BlogControl;