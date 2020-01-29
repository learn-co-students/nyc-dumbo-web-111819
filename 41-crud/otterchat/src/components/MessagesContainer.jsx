import React, { Component } from 'react';
import Message from './Message'

class MessagesContainer extends Component {

  render() {
    let arrayOfComponents = this.props.messages.map(messageObj => (
      <Message
        key={messageObj.id}
        message={messageObj}
        deleteMessage={this.props.deleteMessage}
        updateMessage={this.props.updateMessage}
      />
    ) )
    return (
      <>
        { arrayOfComponents }
      </>
    );
  }

}

export default MessagesContainer;
