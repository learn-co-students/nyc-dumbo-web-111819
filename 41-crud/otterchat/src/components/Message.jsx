import React from 'react'

class Message extends React.Component {

  handleLike = () => {
    // FETCH('/messages/ID', "UPDATE")
    this.props.updateMessage(this.props.message.id)
  }

  handleDelete = (evt) => {
    let {deleteMessage, message} = this.props
    // FETCH('/messages/ID', "DELETE")
    deleteMessage(message.id)
    // this.props.deleteMessage(this.props.message.id)
  }

  render(){
    let {name, content, likes} = this.props.message
    let numberOfLikes = likes === 0 ? "No" : likes
    return(
      <div className="container">
        <button className="delButton" onClick={ this.handleDelete } >X</button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" alt="otter"></img>
        <p><span>{ name } said: </span>{ content }</p>
        <button onClick={ this.handleLike }> { numberOfLikes } Likes</button>
      </div>
    )
  }
}

Message.defaultProps = {
  name: "Eric",
  content: "Eric"
}

export default Message;
