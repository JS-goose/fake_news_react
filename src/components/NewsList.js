import React from "react";
import NewsItem from "./NewsItem";

class NewsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="banner-box-outter">
          <div id="banner-overlay">
            <h1>Breaking News!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <img
            id="banner"
            src="https://source.unsplash.com/random"
            height="300"
            width="500"
            alt="a random banner from unsplash.com"
          />
        </div>

        <div id="banner-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <section id="news-list-container-inner">
          {this.props.articles.map((article) => (
            <NewsItem articles={article} key={article.id} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default NewsList;
