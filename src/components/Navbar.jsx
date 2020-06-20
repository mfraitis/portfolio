import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> <Link to="about">About Me</Link>{" "}
      <Link to="contact">Contact Me</Link> <Link to="projects">Projects</Link>{" "}
    </nav>
  );
};

export default Navbar;
