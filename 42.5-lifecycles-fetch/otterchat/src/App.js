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
    let newMessage = {...infoFromTheChild, likes: 0 }
    fetch('http://localhost:4000/messages', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newMessage)
    })
      .then(r => r.json())
      .then(responseFromServer => {
        let thePushedInModifiedArray = [...this.state.messages, responseFromServer]
        this.setState({
          messages: thePushedInModifiedArray
        })
      })
  }

  deleteMessageFunction = (id) => {
    fetch(`http://localhost:4000/messages/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(responseFromServer => {

        let filteredArray = this.state.messages.filter(message => message.id !== id)
        this.setState({
          messages: filteredArray
        })

      })

  }

  updateMessage = (idFromChild, number, oldLikes) => {

    // let foundMessage = this.state.messages.find(message => message.id === idFromChild)
    // let newLikes = foundMessage.likes + number

    let newLikes = oldLikes + number

    fetch(`http://localhost:4000/messages/${idFromChild}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        likes: newLikes
      })
    })
    .then(r => r.json())
    .then(updatedMessage => {


      let updatedArray = this.state.messages.map(message => {
        if (message.id === updatedMessage.id) {
          return {...message, likes: updatedMessage.likes}
        } else {
          return message
        }
      })

      this.setState({
        messages: updatedArray
      })

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
