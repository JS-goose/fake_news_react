import React from "react";

class NewsItem extends React.Component {
  render() {
    const { id, title, url, google_searches, likes } = this.props.articles;
    return (
      <article className="article-list-stories" id={id}>
        <h1 className="article-titles">{title}</h1>
        <p>
          Here's some sample text from the article Here's some sample text from the article Here's
          some sample text from the article Here's some sample text from the article Here's some
          sample text from the article Here's some sample text from the article
        </p>
        <div>
          <a href={url}>Article Home</a> | <i className="far fa-thumbs-up" /> {likes} |{" "}
          <i className="fas fa-search" /> {google_searches}
        </div>
      </article>
    );
  }
}

export default NewsItem;
