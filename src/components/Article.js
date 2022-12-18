import {React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
  
const Article = () => {
  const { name } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get(`/api/articles/${name}/`);
    const newArticle = response.data;
    setArticle(newArticle);
    setIsLoading(false);
    }
    fetchData();
  }, [name]);

  console.log(typeof(article.title));

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
      <div className='article'>
        <hr />
        <h3>{article.title}</h3>
        <h6>{article.tags}</h6>
        {article.content.map((paragraph,i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    );
  }
}

export default Article;