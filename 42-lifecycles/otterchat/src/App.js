import React from 'react';
import './App.css';
import MessagesContainer from './components/MessagesContainer'
import Form from './components/Form'
import Search from './components/Search'

class App extends React.Component {

  state = {
    messages: [],
    search: ""
  }

  componentDidMount(){
    fetch('http://localhost:4000/messages')
      .then(r => r.json())
      .then(messages => {
        this.setState({
          messages: messages
        })
      })
  }


  // CRUD(start)
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
  // CRUD(end)


  // DYNAMIC SEARCH

  updateSearchTerm = (text) => {
    this.setState({
      search: text
    })
  }

  displayedMessages = () => {
    let arrThatICareAbout = this.state.messages.filter(message => {
      let {content, name} = message
      let loweredSearchTerm = this.state.search.toLowerCase()
      return content.toLowerCase().includes(loweredSearchTerm) || name.toLowerCase().includes(loweredSearchTerm)
    })
    return arrThatICareAbout
  }

  // DYNAMIC SEARCH


  render(){
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Form addMessage={this.addMessageFunction} />

        <Search
          search={this.state.search}
          updateSearchTerm={this.updateSearchTerm}
        />

        <MessagesContainer
          deleteMessage={this.deleteMessageFunction}
          messages={this.displayedMessages()}
          updateMessage={this.updateMessage}
        />
      
      </div>
    );
  }

}

export default App
