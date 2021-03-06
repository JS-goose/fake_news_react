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
          <Sidebar articles={this.state.articles} />
          <Route
            exact
            path="/"
            render={(props) => (
              <section id="news-list-container" articles={this.props.articles}>
                <Header />
                {/* <img id="banner" src="https://source.unsplash.com/random" height="300" width="500" alt="a random photo from unsplash.com"/> */}
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
