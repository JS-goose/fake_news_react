import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleChange = (event) => {
    event.preventDefault();
    event.target.id === "UN"
      ? this.setState({ userName: event.target.value })
      : console.error(`Something went wrong with setting un to the state`);

    event.target.id === "UP"
      ? this.setState({ password: event.target.value })
      : console.error(`Something went wrong with setting pw to the state`);
  };

  render() {
    return (
      <section id="header-container">
        <h1>Fake News Site</h1>
        <p>
          <a href="https://thisisnotarealurl.bacon">Become a supporter</a> |{" "}
          <a href="https://thisisnotarealurl.bacon">subscribe</a>
        </p>
        <form>
          <label htmlFor="login">
            Log In <i className="fas fa-user" />{" "}
          </label>
          <input
            type="text"
            placeholder="username"
            onChange={this.handleChange}
            id="UN"
          />
          <input
            type="text"
            placeholder="password"
            onChange={this.handleChange}
            id="UP"
          />
        </form>
      </section>
    );
  }
}

export default Header;
