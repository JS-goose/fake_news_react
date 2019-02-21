import React from "react";

class NewsItem extends React.Component {
  render() {
      const {id, title} = this.props.articles;
    return (
      <article>
        <p>{title}</p>
      </article>
    );
  }
}

export default NewsItem;
