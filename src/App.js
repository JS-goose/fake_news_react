import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/layout/Header";
import NewsList from "./components/NewsList";
import About from "./components/pages/About";

class App extends Component {
  state = {
    articles: [
      {
        id: 0,
        title: "News Story One",
        read: false,
      },
      {
        id: 1,
        title: "News Story Two",
        read: false,
      },
      {
        id: 2,
        title: "News Story Three",
        read: false,
      },
      {
        id: 3,
        title: "News Story Four",
        read: false,
      },
      {
        id: 4,
        title: "News Story Five",
        read: false,
      },
      {
        id: 5,
        title: "News Story Six",
        read: false,
      },
      {
        id: 6,
        title: "News Story Seven",
        read: false,
      },
      {
        id: 7,
        title: "News Story Eight",
        read: false,
      },
    ],
  };

  componentDidMount() {
    axios
    .get("localhost:5000/api/fakesites")
    .then((response) => console.log(response));
  }

  render() {
    return (
      <Router>
        <section className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <section id="news-list-container" articles={this.props.articles}>
                <NewsList articles={this.state.articles} />
              </section>
            )}
          />
          <Route path="/about" component={About} />
        </section>
      </Router>
    );
  }
}

export default App;
