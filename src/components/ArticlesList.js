import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticlesList = (props) => {
  return (
    <div className="articles-list row">
      {Object.values(props.articlesList).map((article) => (
          <Article
          key={article.name}
          title={article.title}
          content={article.content[0].substring(0,150)}
          />
      ))}
    </div>
  );
}

ArticlesList.propTypes = {
  articlesList: PropTypes.array
};

export default ArticlesList;
