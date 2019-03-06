import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class Header extends Component {


  render() {
    return (
      <section id="header-container">
        <h1>Fake News Site</h1>
        <p><a href="#">Become a supporter</a> | <a href="#">subscribe</a></p>
        <form>
          <label htmlFor="login">Log In <i className="fas fa-user"></i> </label>
          <input type="text" placeholder="username"></input>
          <input type="text" placeholder="password"></input>
        </form>
        
      </section>
    );
  }
}

export default Header;
