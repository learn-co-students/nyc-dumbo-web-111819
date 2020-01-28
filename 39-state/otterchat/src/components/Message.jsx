import React from 'react'

class Message extends React.Component {

  // OLD VERSION
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     likes: 0,
  //     aboutOtters: true,
  //     aboutDogs: false
  //   }
  //   this.handleLike = this.handleLike.bind(this)
  // }

  state = {
    likes: 0,
    aboutOtters: true,
    aboutDogs: false
  }

  // All of our Event Handlers should be arrow functions
  handleLike = (evt) => {
    // If you want to use the event obj in a `.then`, you probably need evt.persist()

    console.log("Liked!");
    let newNumber = this.state.likes + 1
    this.setState({
      likes: newNumber,
      aboutDogs: false,
    })

    // The callback should return an object
    // which will be merged as state

    // this.setState((prevState) => {
    //   return {
    //     likes: prevState.likes + 1
    //   }
    // })


    // DON'T DO THIS:
    // this.state.likes = 24

    // INSTEAD, USE THIS:
    // this.setState({}, () =>{})
    // this.setState(() => {}, () => {})
  }

  render(){
    let {name, nounOfOurChoice} = this.props
      return(
        <div className="container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" alt="otter"></img>
          <p><span>{ name } said: </span>I love { nounOfOurChoice }</p>
          <button onClick={ this.handleLike }> { this.state.likes === 0 ? "No" : this.state.likes } Likes</button>
        </div>
      )

  }
}

Message.defaultProps = {
  name: "Eric",
  nounOfOurChoice: "Eric"
}

export default Message;
