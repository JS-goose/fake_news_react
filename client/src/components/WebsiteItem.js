import React from 'react';

const WebsiteItem = ({ website }) => (
  <article className="article-list-stories">
    <h1>Url: {website.url}</h1>
    <ul>
      <li>Twitter Followers: {website.twitter_followers}</li>
      <li>Category: {website.category}</li>
      <li>Likes: {website.likes}</li>
      <li>Searches: {website.google_searches}</li>
    </ul>
  </article>
);

export default WebsiteItem;
