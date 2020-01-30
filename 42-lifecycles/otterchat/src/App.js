import React from 'react';
import './App.css';
import MessagesContainer from './components/MessagesContainer'
import Form from './components/Form'
import Search from './components/Search'
import data from './data'

class App extends React.Component {

  state = {
    messages: data
  }

  addMessageFunction = (infoFromTheChild) => {
    let newId = this.state.messages.length + 1
    let newMessage = {...infoFromTheChild, id: newId, likes: 0 }
    let thePushedInModifiedArray = [newMessage, ...this.state.messages]
    this.setState({
      messages: thePushedInModifiedArray
    })
  }

  deleteMessageFunction = (id) => {
    let filteredArray = this.state.messages.filter(message => message.id !== id)
    this.setState({
      messages: filteredArray
    })
  }

  updateMessage = (idFromChild, number) => {
    let updatedArray = this.state.messages.map(message => {
      if (message.id === idFromChild) {
        return {...message, likes: message.likes + number}
      } else {
        return message
      }
    })
    this.setState({
      messages: updatedArray
    })
  }

  render(){
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Form addMessage={this.addMessageFunction} />
        <Search/>
        <MessagesContainer
          deleteMessage={this.deleteMessageFunction}
          messages={this.state.messages}
          updateMessage={this.updateMessage}
        />
      </div>
    );
  }

}

export default App
