import React, { Component } from 'react';
import Header from './Header.js'
import About from './About.js'
import Contact from './Contact.js'
import Home from './Home.js'
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>


        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </Router>
        <div id="canvas"> </div>
      </div>
    );
  }
}

export default App;
