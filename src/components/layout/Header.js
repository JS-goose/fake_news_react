import React from "react";

export default function Header() {
  return (
    <header>
      <nav id="navbar">
        <ul>
          <li className="nav-links">
            <a href="#home">Home</a>
          </li>
          <li className="nav-links">
            <a href="#about">About</a>
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
