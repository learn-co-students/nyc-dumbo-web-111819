import React from 'react'

class Message extends React.Component {

  state={
    status: "liked"
  }

  handleLike = () => {
    let number = Math.random() < 0.5 ? 50 : -2
    this.props.updateMessage(this.props.message.id, number)

    // THIS DOES THE SAME THING AS OUR componentDidUpdate
    // if (number > 0) {
    //   this.setState({
    //     status: "liked"
    //   })
    // } else {
    //   this.setState({
    //     status: "disliked"
    //   })
    // }
  }

  handleDelete = (evt) => {
    let {deleteMessage, message} = this.props
    deleteMessage(message.id)
  }

  componentDidUpdate(prevProps, prevState) {
    // ALL OF OUR STATE/PROPS CHANGE SHOULD BE INSIDE AN IF STATEMENT
    if (prevProps.message.likes > this.props.message.likes) {
      this.setState({
        status: "disliked"
      })
    }

    if(prevProps.message.likes < this.props.message.likes) {
      this.setState({
        status: "liked"
      })
    }

  }

  componentWillUnmount() {
    console.log("Goodbye");
  }

  render(){
    let {name, content, likes} = this.props.message
    let numberOfLikes = likes === 0 ? "No" : likes
    let status = this.state.status
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
