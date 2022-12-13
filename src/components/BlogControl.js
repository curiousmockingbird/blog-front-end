import React from "react";
import axios  from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useUser from './../hooks/useUser';
import Welcome from './Welcome';

const BlogControl = () => {
  const [articleCount, setArticleCount] = useState(0);
  const { user, isLoading } = useUser();

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
      <Welcome userEmail={user.email} />
    )
  }
}

export default BlogControl;
