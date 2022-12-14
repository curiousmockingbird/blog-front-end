import React from 'react';
import BlogControl from './BlogControl';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Article from './Article';
import ArticlesList from './ArticlesList';
import Account from './Account';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => { 
  return (
    <div className="App container">
    <Router>
      <div className='row'><Nav /></div>
      <Routes>
        <Route path="/" element={<BlogControl /> } />
        <Route path="/sign-in" element={<SignIn /> } />
        <Route path="/sign-up" element={<SignUp /> } />
        <Route path="/account" element={<Account /> } />
        <Route path="/articles/:name" element={<Article /> } />
        <Route path="/articlesList" element={<ArticlesList /> } />
      </Routes>
    </Router>
    </div>
    );
}

export default App;
