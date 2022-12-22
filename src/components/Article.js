import {React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentsList from './CommentsList';
import useUser from './../hooks/useUser';
import AddCommentForm from './AddCommentForm';
import {Link } from 'react-router-dom';

const Article = () => {
  const { name } = useParams();

  const [article, setArticle] = useState({}, {upVotes: 0, comments: []});
  const [isLoadingTwo, setIsLoadingTwo] = useState(true);
  const { user, isLoading } = useUser();
  const [isUpvoted, setIsUpvoted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.get(`/api/articles/${name}`, {headers});
    const updatedArticle = response.data;
    setArticle(updatedArticle);
    setIsLoadingTwo(false);
    }
    if(!isLoading) {
      fetchData();
    }
  }, [ name, isLoading, user]);

  const addUpVote = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? {authtoken: token} : {};
    const response = await axios.put(`/api/articles/${name}/upVotes`, null, {headers});
    const updatedArticle = response.data;
    setArticle(updatedArticle);
    setIsUpvoted(false);
  }

  // Conditional rendering of tags
  // let tagContent = null;
  // if (props.tags.length > 1) {
  //   tagContent = props.tags.map((tag) => (
  //     `#${tag} `
  //     ));
  // } else {
  //   tagContent = `#${props.tags}`;
  // }
// console.log(article.content.join(' '));

  if (isLoadingTwo) {
    return (
      <div className='article'>
        <hr />
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <>
      <div className='row'>
      <img src={require(`./../img/${article.name}.jpg`)} className='col-12' alt='Cuban flag in front of a building'></img>
      </div>
      <div className='row d-flex justify-content-center article-header'>
        <hr />
        <h3>{article.title}</h3>
        <h6>This article has <span className='votes'> {article.upVotes} </span></h6>
        {user
        ? <button onClick={addUpVote} className='btn btn-outline-primary col-5'>{isUpvoted ? 'Up-vote' : 'Already up-voted!'}</button>
        : <Link to='/sign-in'>{<button className='btn btn-outline-primary'>Log in to upvote</button>}</Link>}
        <h6>{article.tags.map((tag, i) => 
          <span key={i} className='tags'># {tag} </span>
        )}</h6>
      </div>
        {article.content.map((paragraph,i) => (
          <p key={i}>{paragraph}</p>
        ))}
      <AddCommentForm articleName={name} onArticleUpdated={updatedArticle => setArticle(updatedArticle)}/>
      <CommentsList comments={article.comments}/>
      </>
    ); 
  }
}

export default Article;