import React from 'react';
import PropTypes from 'prop-types';
  
function Article(props) {
  return (
    <div className="col-6">
      <hr />
      <h3>{props.title}</h3>
      <p>{props.content}</p> 
    </div>
  );
}

Article.prototype = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Article;