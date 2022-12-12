import React from "react";
import { useState, useEffect } from 'react';
// import { db, auth } from './../firebase';
import axios from 'axios';
import './../css/LogInHeader.css';
import { Link } from 'react-router-dom';
import useUser from './../hooks/useUser';

const BlogControl = () => {

  const [articleCount, setArticleCount] = useState(0);
  const { user, isLoading } = useUser();

  //Automatically fetches articles count every 10s from database through endpoint api/articles
  useEffect(() => {
    const loadArticleCount = async () => {
      const response = await axios.get(`/api/articles/`);
      const newArticleCount = response.data;
      setArticleCount(newArticleCount);
    }
    loadArticleCount();

    // const interval = setInterval(() => {
    //   loadArticleCount()
    // }, 10000);
    // //The interval is cleared when the user navigates to another page
    // return()=>clearInterval(interval);
  }, []);

  if (!user) {
    return (
      <section className='container'>
      <div className="test">
        <h1> Welcome to the Cuban blog!</h1>
        <h3>{articleCount}</h3>
        <h4>Articles published, and counting</h4>
        <ul>
          <li>
            <Link to='/sign-in'>{<button>Sign In / Sign Up</button>}</Link>
          </li>
        </ul>
      </div>
      </section>
    )
  } else if (user) {

    return (      
      <section className='container'>
      <div className="test">
        <h1> Welcome to the Cuban blog <br></br>{user.email}!</h1>
      </div>
      </section>
    )
  }
}

export default BlogControl;