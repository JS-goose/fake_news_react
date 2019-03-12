import React from "react";
import NewsItem from "./NewsItem";

class NewsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="banner-overlay">
          <h1>This is the overlay</h1>
        </div>
        <img
          id="banner"
          src="https://source.unsplash.com/random"
          height="300"
          width="500"
          alt="a random banner from unsplash.com"
        />

        <div id="banner-description">
          <h1 id="banner-overlay">Breaking news!</h1>
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
