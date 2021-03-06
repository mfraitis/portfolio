import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Projects path="/projects" />
        <Contact path="/contact" />
      </Router>
      <SocialMedia />
    </React.Fragment>
  );
}

export default App;
