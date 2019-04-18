import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="Contact">
        <div id="canvas"> </div>
      </div>
    );
  }
  componentDidMount () {
    const script = document.createElement("script");

    script.src = process.env.PUBLIC_URL + "/main.js";
    script.async = true;

    document.body.appendChild(script);
}
}

export default Home;
