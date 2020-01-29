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
    // infoFromTheChild = {name: "", content: ""}
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
    // this.setState((prevState) => {
    //   let filteredArray = prevState.messages.filter(m => m.id !== id)
    //   return {
    //     messages: filteredArray
    //   }
    // })
  }

  updateMessage = (idFromChild) => {
    let updatedArray = this.state.messages.map(message => {
      if (message.id === idFromChild) {
        return {...message, likes: message.likes + 1}
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
