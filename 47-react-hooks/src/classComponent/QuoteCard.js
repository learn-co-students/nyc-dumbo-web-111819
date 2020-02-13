import React, { Component } from 'react';

export default class QuoteCard extends Component {
    state = {
        author: false
    }

    handleClick = () => {
        this.setState({
            author: !this.state.author
        })
    }
  render() {
    const {author, quote} = this.props.quote
    return (
      <div className="quote-card">
          {
              this.state.author ? 
              <p>By: {author}</p>
              :
              <p>{`"${quote}"`}</p>
          }
          <button onClick={this.handleClick}>View {this.state.author ? "Quote" : "Author"}</button>
      </div>
    );
  }
}
