import React from 'react';
import PropTypes from 'prop-types';
  
function Article(props) {
  
  return (
    <div className='article'>
      <hr />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      foreach (props.tags as tag) {
        <span className='tag'>{tag}</span> 
      }
      
    </div>
  );
}

Article.prototype = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Article;