import React from "react";

class NewsItem extends React.Component {
  render() {
    return (
      <article articles={this.props.articles}>
        <p>This is a news article</p>
      </article>
    );
  }
}

export default NewsItem;
