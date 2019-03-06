import React from "react";
import NewsItem from "./NewsItem";

class NewsList extends React.Component {
  render() {
    return (

      <section id="news-list-container-inner">
      {this.props.articles.map((article) => <NewsItem articles={article} key={article.id} />)}
      </section>
      )
  }
}

export default NewsList;
