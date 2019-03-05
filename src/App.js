import React, { Component, PropTypes } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import NewsList from "./components/NewsList";
import About from "./components/pages/About";
import Header from "./components/layout/Header"

class App extends Component {
  state = {
    articles: [ ],
  };

  componentDidMount = () => {
    axios
      .get("/api/fakesites")
      .then((response) => this.setState({articles: response.data}))
      .catch(
        (error) =>
          alert(`Error fetching data, check console for more information`) &&
          console.error({ error })
      );
  };

  render() {
    return (
      <Router>
        <section className="App">
          <Header />
          <Sidebar />
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
