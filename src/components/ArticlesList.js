import {React, useState, useEffect } from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';
import headerImg from './../img/header.jpg';
import headerLight from './../img/header-light.jpg';
import useUser from '../hooks/useUser';

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState({});
  const [isLoadingTwo, setIsLoadingTwo] = useState(true);
  const [count, setCount] = useState(9);
  const [explore, setExplore] = useState(false);
  const [tag, setTag] = useState('');
  const { user, isLoading } = useUser();

  useEffect(() => {
    // READ only the first 9 articles from collection
    const fetchData = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? {authtoken: token} : {};
    const response = await axios.get('/api/articles-list/', { headers });
    const newArticlesList = response.data;
    setArticlesList(newArticlesList);
    setIsLoadingTwo(false);
    }
    if(!isLoading) {
      fetchData();
    }
  }, [user, isLoading]);
  
    // READ next 9 articles from collection, and so on
    const loadMore = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      const response = await axios.get(`/api/articles-list/${count}/`, { headers });
      const newArticlesList = response.data;
      setArticlesList(newArticlesList);
      setCount(count + 9);
    }
  
    const callToAction = () => {
      setExplore(true);
    }

  
  // Search articles by popularity
  const searchByPopularity = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? {authtoken: token} : {};
    const response = await axios.get('/api/popularity/', { headers });
    const newArticlesList = response.data;
    setArticlesList(newArticlesList);
  }

  // useEffect to search articles by tags once the tag state is updated
  useEffect(() => {
    const fetchData = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      const response = await axios.get(`/api/${tag}`, { headers });
      const newArticlesList = response.data;
      setArticlesList(newArticlesList);
    }
    if(!isLoading) {
      fetchData();
    }
  }, [tag, user, isLoading]);
    
  if (isLoadingTwo) {
    return (
      <div className='row'>
          <h5>Loading...</h5>
      </div>
    );
    //If explore is set to true, show new component
  } else if (explore) {
    return (
      <>
      <header className='row mb-2 mt-2'>
      <div className='text-center bg-image' style={{ backgroundImage: `url(${headerLight})`, height: 200, backgroundSize:"contain" }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <form className='form-inline'>
                <input className='form-control mr-sm-2' type='text' placeholder='Search by tag' required value={tag} onChange={(event) => setTag((event.target.value.toLowerCase()))}/>
              </form>
            <div className='d-flex justify-content-center'>
              <button onClick={searchByPopularity} className='btn btn-outline-light btn-sm mt-2'>Search articles by popularity</button>
            </div>
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
      <div className='row d-flex justify-content-center'>
        <button onClick={loadMore} className='btn btn-outline-primary col-5 mb-2'>Load more</button>
      </div>
      </>
    );
} else {
    return (
      <>
      <header className='row mb-2 mt-2'>
      <div className='p-5 text-center bg-image' style={{ backgroundImage: `url(${headerImg})`, height: 200, backgroundSize:"contain" }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <button className='btn btn-outline-light btn-lg' onClick={callToAction}>Explore</button>
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
      <div className='row d-flex justify-content-center'>
        <button onClick={loadMore} className='btn btn-outline-primary col-5 mb-2'>Load more</button>
      </div>
      </>
    );
  }
}



export default ArticlesList;
