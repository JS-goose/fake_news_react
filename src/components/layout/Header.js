import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Header'}
    }

    handleClick = () => {
        console.log(this);
    }

  render() {
    return (
      <section id="header-container">
        <p>This is the <button onClick={this.handleClick}>{this.state.name}</button> section</p>
      </section>
    );
  }
}

export default Header;
