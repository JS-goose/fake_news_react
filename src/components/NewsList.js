import React from "react";
import NewsItem from "./NewsItem";

class NewsList extends React.Component {
  render() {
    return (
      <section id="news-list-container" articles={this.props.articles}>
        <h1>This is the news stories container Component</h1>
        <NewsItem />
      </section>
    );
  }
}

export default NewsList;
