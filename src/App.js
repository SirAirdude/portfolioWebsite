import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Projects from "./Projects/Projects.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/" className={"navLinks"}>
            Kyle Clabough
          </Link>
          <Link to="/projects" className={"navLinks"}>
            Projects
          </Link>
          <Link to="/socialmedia" className={"navLinks"}>
            Social Media
          </Link>
          <Link to="/about" className={"navLinks"}>
            About
          </Link>
          <Link to="/contact" className={"navLinks"}>
            Contact
          </Link>
        </nav>
        <main className={"body"}>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/projects" render={() => <Projects />} />
        </main>
      </div>
    );
  }
}

export default App;
