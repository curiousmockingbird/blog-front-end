import axios  from 'axios';
import { React, useState, useEffect } from 'react';
import useUser from './../hooks/useUser';
import Welcome from './Welcome';
import Prompt from './Prompt';
import ArticlesList from './ArticlesList';
import './../css/output.css';

const BlogControl = () => {
  const [articleCount, setArticleCount] = useState(0);
  const [articlesList, setArticlesList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    //This useEffect returns the number of articles from the database
      const loadArticleCount = async () => {
      const response = await axios.get(`/api/articles/`);
      const newArticleCount = response.data;
      setArticleCount(newArticleCount);
      setIsLoaded(true)
    }
    loadArticleCount();

      const interval = setInterval(() => {
        loadArticleCount()
      }, 10000);
      //The interval is cleared when the user navigates to another page
      return()=>clearInterval(interval);  
  }, []);

  useEffect(() => {
    //This useEffect returns the list of articles from the database
    const loadArticlesList = async () => {
      const response = await axios.get(`/api/articles-list/`);
      const newArticlesList = response.data;
      setArticlesList(newArticlesList);
    }
    loadArticlesList();
  }, []);

 

  if (!user) {
    return (
    <Prompt articleCount={articleCount}/>
    )
  } else if (!isLoaded) {
    return (
      <div className="loading">Loading...</div>
    );
  }else if (user) {
  
    return (      
      <>
    <Welcome userEmail={user.email} />
    <ArticlesList articlesList={articlesList} />
    </>
    )
  }
}

export default BlogControl;
