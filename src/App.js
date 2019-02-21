import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import NewsList from "./components/NewsList";

class App extends Component {
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
