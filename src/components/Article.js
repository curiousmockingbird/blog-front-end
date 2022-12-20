import {React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentsList from './CommentsList';

const Article = () => {
  const { name } = useParams();

  const [article, setArticle] = useState({}, {upVotes: 0, comments: []});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get(`/api/articles/${name}/`);
    const updatedArticle = response.data;
    setArticle(updatedArticle);
    setIsLoading(false);
    }
    fetchData();
    if (!isLoading) {
      fetchData();
    }
  }, [isLoading, name]);

  const addUpVote = async () => {
    const response = await axios.put(`/api/articles/${name}/upVotes`);
    const updatedArticle = response.data;
    setArticle(updatedArticle);
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
  if (isLoading) {
    return (
      <div className='article'>
        <hr />
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <>
      <div className='article '>
        <hr />
        <h3>{article.title}</h3>
        <h3>This article has {article.upVotes}</h3>
        <button onClick={addUpVote}>Add upvote</button>
        <h6>{article.tags.map((tag, i) => 
          <span key={i} className='tags'># {tag} </span>
        )}</h6>
        {article.content.map((paragraph,i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <CommentsList comments={article.comments}/>
      </>
    ); 
  }
}

export default Article;