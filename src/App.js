import React, { Component } from "react";
import Home from "./Home.js";
import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Kyle Clabough</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/socialmedia">Social Media</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <body>
          <Home />
        </body>
      </div>
    );
  }
}

export default App;
