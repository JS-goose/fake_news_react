import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <header articles={this.props.articles}>
        <nav id="navbar">
          <h1>Fake News Site</h1>
          <ul id="nav-links-list">
            <li className="sidebar-title">
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
          </ul>
        </nav>
        <section id="latest-stories">
          <ul>
            <li className="sidebar-title">
              <p>Latest Stories</p>
            </li>
            <li>{this.props.articles.map((item) => {
              console.log(item)
              return <li><a href={item.url} target="_blank">{item.title}</a></li>
            })}</li>
          </ul>
        </section>
      </header>
    );
  }
}

export default Sidebar;