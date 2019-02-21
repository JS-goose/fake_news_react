import React from "react";
import NewsItem from "./NewsItem";

class NewsList extends React.Component {
  render() {
    return this.props.articles.map((article) => <NewsItem articles={article} key={article.id} />);
  }
}

export default NewsList;
