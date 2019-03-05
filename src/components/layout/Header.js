import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class Header extends Component {


  render() {
    return (
      <section id="header-container">
        <h1>Fake News Site</h1>
        <form>
          <label htmlFor="login">Label</label>
          <input type="text"></input>
        </form>
        
      </section>
    );
  }
}

export default Header;
