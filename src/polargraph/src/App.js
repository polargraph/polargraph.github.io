import React, { Component } from 'react';
import Header from './Header.js'
import About from './About.js'
import Contact from './Contact.js'
import Home from './Home.js'
import { Container } from 'react-bootstrap';
import './App.css';
import { HashRouter, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>


        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </HashRouter>
        <div id="canvas"> </div>
      </div>
    );
  }
}

export default App;
