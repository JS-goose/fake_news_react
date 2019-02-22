import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Websites from './components/Websites';
import axios from 'axios';

class App extends Component {
  state = {
    websites: [],
  };

  componentDidMount = async () => {
    const request_websites = await await axios.get('/api/fakesites');

    this.setState({ websites: request_websites.data });

    //Remember to handle errors when fetching data.
    // You can use a try catch
  };

  render() {
    return (
      <section className="container">
        <Header />
        <section id="website-list-container" websites={this.props.websites}>
          <Websites websites={this.state.websites} />
        </section>
      </section>
    );
  }
}

export default App;
