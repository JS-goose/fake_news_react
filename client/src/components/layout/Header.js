import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav id="navbar">
        <h1>Fake News Site</h1>
        <ul>
          <li className="nav-links">
          <Link to="/">Home</Link>
          </li>
          <li className="nav-links">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-links">
            <a href="#news">News</a>
          </li>
          <li className="nav-links">
            <a href="#login">Log In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
