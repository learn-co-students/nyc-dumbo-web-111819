import React from 'react'

class Message extends React.Component {

  handleLike = () => {
    console.log("WE WILL GET BACK TO THIS LATER");
  }

  render(){
    let {name, content, likes} = this.props.message
    let numberOfLikes = likes === 0 ? "No" : likes
    return(
      <div className="container">
        <button className="delButton">X</button>
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
