import React, { Component } from 'react';
import QuoteCard from './QuoteCard'

export default class QuotesContainer extends Component {
  render() {
    return (
      <div id="quote-container">
          <h1>Motivational Quotes</h1>
          {
              this.props.quotes.map(quote => <QuoteCard key={quote.author} quote={quote}/>)
          }
      </div>
    );
  }
}
