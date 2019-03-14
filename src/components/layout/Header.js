import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    userName: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ userName: event.target.value, password: event.target.value})
  }

  render() {
    return (
      <section id="header-container">
        <h1>Fake News Site</h1>
        <p><a href="#">Become a supporter</a> | <a href="#">subscribe</a></p>
        <form>
          <label htmlFor="login">Log In <i className="fas fa-user"></i> </label>
          <input type="text" placeholder="username" value={this.state.userName} onChange={this.handleChange}></input>
          <input type="text" placeholder="password" value={this.state.password} onChange={this.handleChange}></input>
        </form>
        
      </section>
    );
  }
}

export default Header;
