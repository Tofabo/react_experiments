import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import NavBar from './component/NavBar/NavBar';
import Blog from './component/Blog/Blog';
import WebComic from './component/WebComic/WebComic';
import Art from './component/Art/Art';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar />
          <Switch>
            <Route path='/web_comic' component={WebComic}/>
            <Route path='/art' component={Art}/>
            <Route path='/' component={Blog}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
