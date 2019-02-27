import React from 'react';
import WebsiteItem from './WebsiteItem';

const Websites = ({ websites }) => websites.map((website) => <WebsiteItem website={website} key={website.id} />);

export default Websites;
