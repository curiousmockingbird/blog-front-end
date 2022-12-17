import React from 'react';
import PropTypes from 'prop-types';
  
function Article(props) {
  // Conditional rendering of tags
  let tagContent = null;
  if (props.tags.length > 1) {
    tagContent = props.tags.map((tag) => (
      `#${tag} `
      ));
  } else {
    tagContent = `#${props.tags}`;
  }
  console.log(tagContent[tagContent.length-1].slice(0,-1));

  return (
    <div className='article'>
      <hr />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p>{tagContent}</p>
    </div>
  );
}

Article.prototype = {
  title: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.string
};

export default Article;