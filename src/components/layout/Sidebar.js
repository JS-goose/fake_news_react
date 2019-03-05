import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav id="navbar">
        <h1>Fake News Site</h1>
        <ul>
          <li className="nav-links-title">
            <p>Sidebar Navigation</p>
          </li>
          <li className="nav-links">
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/about">
              <button>About</button>
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/about">
              <button>All categories</button>
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/about">
              <button>Fake News</button>
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/about">
              <button>Conspiracy</button>
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/about">
              <button>Click Bait</button>
            </Link>
          </li>
          <li className="nav-links">
            <a href="#login">Log In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
