import {React, useState, useEffect } from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';
import headerImg from './../img/header.jpg';

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(9);

  useEffect(() => {
    // READ only the first 9 articles from collection
    const fetchData = async () => {
    const response = await axios.get('/api/articles-list/');
    const newArticlesList = response.data;
    setArticlesList(newArticlesList);
    setIsLoading(false);
    }
    fetchData();
  }, []);
  
  // READ next 9 articles from collection, and so on
    const loadMore = async () => {
      const response = await axios.get(`/api/articles-list/${count}/`);
      const newArticlesList = response.data;
      setArticlesList(newArticlesList);
      setCount(count + 9);
    }
  
  if (isLoading) {
    return (
      <div className='row'>
          <h5>Loading...</h5>
      </div>
    );
  } else {
    return (
      <>
      <header className='row mb-2 mt-2'>
      <div className='p-5 text-center bg-image' style={{ backgroundImage: `url(${headerImg})`, height: 200, backgroundSize:"contain" }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
      </div>
    </header>

        <div className='row remove-link-style'>{Object.values(articlesList).map((article) => (
            <Link key={article.name}to ={`/articles/${article.name}` } className='col-md-4'>
              <div className='card mb-2'>
              <img src={require(`./../img/${article.name}.jpg`)} className='card-img-top' alt='The one' />
              <div className='card-body articles-list'>
              <h5 className='card-title'>{article.title}</h5>
              <p className='card-text'>{article.content[0].substring(0,150)}</p>
              <h6>{article.tags.map((tag, i) => 
                <span key={i} className='tags'># {tag} </span>
              )}</h6>
              </div>
              </div>
            </Link>
        ))}
      </div>
      <div className='row'>
        <button onClick={loadMore} className='btn btn-outline-primary col-5'>Load more</button>
      </div>
      </>
    );
  }

}



export default ArticlesList;
