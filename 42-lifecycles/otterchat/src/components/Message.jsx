import React from 'react'

class Message extends React.Component {

  state={
    status: "liked"
  }

  handleLike = () => {
    let number = Math.random() < 0.5 ? 50 : -2
    this.props.updateMessage(this.props.message.id, number)
  }

  handleDelete = (evt) => {
    let {deleteMessage, message} = this.props
    deleteMessage(message.id)
  }

  render(){
    let {name, content, likes} = this.props.message
    let numberOfLikes = likes === 0 ? "No" : likes
    let status = this.state.status === "liked" ? "liked" : "disliked"
    return(
      <div className={`container ${status}`}>
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
