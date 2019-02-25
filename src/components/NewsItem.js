import React from "react";

class NewsItem extends React.Component {
  render() {
    const { id, title } = this.props.articles;
    return (
      <article className="article-list-stories" id={id}>
        <h1 className="article-titles">{title}</h1>
        <p>
          Here's some sample text from the article Here's some sample text from the article Here's
          some sample text from the article Here's some sample text from the article Here's some
          sample text from the article Here's some sample text from the article
        </p>
      </article>
    );
  }
}

export default NewsItem;
