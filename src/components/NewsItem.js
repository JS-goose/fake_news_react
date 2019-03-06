import React from "react";

class NewsItem extends React.Component {
  render() {
    const { id, title, url, google_searches, likes } = this.props.articles;
    return (
      <article className="article-list-stories" id={id}>
        <h1 className="article-titles">{title}</h1>
        <p>
          Spicy jalapeno bacon ipsum dolor amet ham hock tri-tip tongue biltong bresaola. Drumstick
          shankle meatloaf kevin rump filet mignon. Meatball rump fatback, pork spare ribs pancetta
          short ribs cupim pastrami frankfurter strip steak.
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
