import React from 'react'

class Message extends React.Component {

  state = {
    likes: 0
  }

  handleLike = (evt) => {
    let newNumber = this.state.likes + 1
    this.setState({
      likes: newNumber,
    })
  }

  render(){
    let {name, content} = this.props
    let numberOfLikes = this.state.likes === 0 ? "No" : this.state.likes
    return(
      <div className="container">
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
