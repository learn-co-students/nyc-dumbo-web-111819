import React from 'react';
import './App.css';
import MessagesContainer from './components/MessagesContainer'
import Form from './components/Form'
import data from './data'

class App extends React.Component {

  state = {
    messages: data
  }

  addMessageFunction = (infoFromTheChild) => {
    console.log(infoFromTheChild);
  }

  render(){
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Form addMessage={this.addMessageFunction} />
        <MessagesContainer messages={this.state.messages}/>
      </div>
    );
  }

}

export default App
