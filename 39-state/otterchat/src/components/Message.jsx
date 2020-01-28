import React from 'react'

class Message extends React.Component {

  render(){
    let {name, nounOfOurChoice} = this.props
    return(
      <div className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" alt="otter"></img>
        <p><span>{ name } said: </span>I love { nounOfOurChoice }</p>
      </div>
    )
  }
}

Message.defaultProps = {
  name: "Eric",
  nounOfOurChoice: "Eric"
}

export default Message;
