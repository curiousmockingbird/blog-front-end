import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticlesList = (props) => {
  return (
      <div className='row remove-link-style'>{Object.values(props.articlesList).map((article) => (
          <Link key={article.name}to ={`/articles/${article.name}` } className='articles-list col-md-4'>
          <Article
          key={article.name}
          title={article.title}
          content={article.content[0].substring(0,150)}
          tags={article.tags}
          />
          </Link>
      ))}
    </div>
  );
}

ArticlesList.propTypes = {
  articlesList: PropTypes.array
};

export default ArticlesList;
