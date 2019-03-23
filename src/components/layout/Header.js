import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleChange = (event) => {
    console.log(event.target);
    if(event.target.id === "UN") {
      this.setState({userName:event.target.value});
    }

    if (event.target.id ==="UP") {
      this.setState({password: event.target.value});
    }
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
            // value={this.state.userName}
            onChange={this.handleChange}
            id="UN"
          />
          <input
            type="text"
            placeholder="password"
            // value={this.state.password}
            onChange={this.handleChange}
            id="UP"
          />

        </form>
      </section>
    );
  }
}

export default Header;
