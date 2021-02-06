import React from "react";
import { Link } from "react-router-dom";
import logo from "./log.png";
import "../App.css";
function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="madcodder" />

      <div className="nav-links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/about">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
