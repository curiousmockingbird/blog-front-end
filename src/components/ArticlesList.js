import {React, useState, useEffect } from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';
import build from './../img/how-to-build-democracy.jpg';

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get('/api/articles-list/');
    const newArticlesList = response.data;
    setArticlesList(newArticlesList);
    setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className='row'>
          <h5>Loading...</h5>
      </div>
    );
  } else {
    return (
        <div className='row remove-link-style'>{Object.values(articlesList).map((article) => (
            <Link key={article.name}to ={`/articles/${article.name}` } className='articles-list col-md-4'>
              <div className='card'>
              <img src={build} className='card-img-top' alt='The one' />
              <div className='card-body'>
              <h5 className='card-title'>{article.title}</h5>
              <p className='card-text'>{article.content[0].substring(0,150)}</p>
              <h6>{article.tags}</h6>
              </div>
              </div>
            </Link>
        ))}
      </div>
    );
  }

}



export default ArticlesList;
