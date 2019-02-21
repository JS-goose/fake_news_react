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
        title: "News Story One",
        read: false,
      },
      {
        id: 2,
        title: "News Story One",
        read: false,
      },
      {
        id: 3,
        title: "News Story One",
        read: false,
      },
      {
        id: 4,
        title: "News Story One",
        read: false,
      },
      {
        id: 5,
        title: "News Story One",
        read: false,
      },
      {
        id: 6,
        title: "News Story One",
        read: false,
      },
      {
        id: 7,
        title: "News Story One",
        read: false,
      },
    ],
  };
  render() {
    return (
      <section className="App">
        <Header />
        <NewsList />
      </section>
    );
  }
}

export default App;
