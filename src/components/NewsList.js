import React from 'react';
import NewsItem from './NewsItem';

class NewsList extends React.Component {
    render() {
        return (
            <section>
                <h1>
                    This is the news stories container Component
                </h1>
                <NewsItem />
            </section>
        )
    }
}

export default NewsList;