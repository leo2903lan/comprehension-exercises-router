import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" >Home</Link>
        <Link to="/About" >About</Link>
        <Link to="/Users" >User</Link>
        <Route exact path="/" component={ Home } />
        <Route path="/About" component={ About } />
        <Route path="/Users" component={ Users } />

      </BrowserRouter>
    );
  }
}

export default App;
