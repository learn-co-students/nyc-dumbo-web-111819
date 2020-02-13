import React from 'react';
import '../App.css';
import Form from './Form'
import QuoteContainer from './QuoteContainer'

class App extends React.Component{

  state = {
    quotes: [],
    addQuote: false
  }

  componentDidMount(){
    fetch(`http://localhost:4000/quotes`)
    .then(res => res.json())
    .then(quotes => this.setState({
      quotes
    }))
  }

  handleAddQuote = (newQuote) => {
    this.setState({
      addQuote:false,
      quotes: [...this.state.quotes, newQuote]
    })
  }

  handleAddMode = () => {
    this.setState({
      addQuote: !this.state.addQuote
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.handleAddMode}>Add Quote</button>
        {
          this.state.addQuote ? 
          <Form handleAddQuote={this.handleAddQuote}/>
          :
          <QuoteContainer quotes={this.state.quotes}/>
        }
      </div>
    )
  }
}
export default App;
