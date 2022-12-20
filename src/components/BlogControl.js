import axios  from 'axios';
import { React, useState, useEffect } from 'react';
import useUser from './../hooks/useUser';
import Welcome from './Welcome';
import Prompt from './Prompt';
import ArticlesList from './ArticlesList';
import './../css/output.css';

const BlogControl = () => {
  const [articleCount, setArticleCount] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    //This useEffect returns the number of articles from the database
    const loadArticleCount = async () => {
    const response = await axios.get(`/api/articles/`);
    const newArticleCount = response.data;
    setArticleCount(newArticleCount);
    }
    loadArticleCount();

    // const interval = setInterval(() => {
    // loadArticleCount()
    // }, 10000);
    // //The interval is cleared when the user navigates to another page
    // return()=>clearInterval(interval);  
    
  }, []);

  if (!user) {
    return (
    <>
    <Prompt articleCount={articleCount}/>
    <ArticlesList />
    </>
    )
  } else if (user) {
  
    return (      
      <>
    <hr />
    <Welcome userEmail={user.email} />
    <ArticlesList />
    </>
    )
  }
}

export default BlogControl;
