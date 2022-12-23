import React from 'react';
import BlogControl from './BlogControl';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Article from './Article';
import ArticlesList from './ArticlesList';
import Account from './Account';
import About from './About';
import NavbarComponent from './NavbarComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => { 
  return (
    <div className="App container">
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<BlogControl /> } />
        <Route path="/sign-in" element={<SignIn /> } />
        <Route path="/sign-up" element={<SignUp /> } />
        <Route path="/account" element={<Account /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/articles/:name" element={<Article /> } />
        <Route path="/articlesList" element={<ArticlesList /> } />
      </Routes>
    </Router>
    </div>
    );
}

export default App;

