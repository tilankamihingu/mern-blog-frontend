import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';
import AddArticle from './components/AddArticle';
import Article from './components/layouts/Article';
import EditArticle from './components/layouts/EditArticle';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    axios.get("/articles")
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  })
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Articles posts={posts}/>} />
        <Route path="/article/:id" render={(props) => <Article {...props} posts={posts}/>} />
        <Route path="/update/:id" render={(props) => <EditArticle {...props} posts={posts}/>} />
        <Route path="/add-article" component={AddArticle} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
