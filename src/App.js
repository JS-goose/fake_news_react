import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import NewsList from "./components/NewsList";

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
  render() {
    return (
      <section className="App">
        <Header />
        <section id="news-list-container" articles={this.props.articles}>
          <NewsList articles={this.state.articles} />
        </section>
      </section>
    );
  }
}

export default App;
