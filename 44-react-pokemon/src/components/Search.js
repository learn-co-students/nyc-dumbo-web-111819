import React from 'react'

class Search extends React.Component {

  // state={
  //   term: ''
  // }

  handleChange = (e) => {
    this.props.handleInput(e.target.value)
    // this.setState({term: e.target.value}, () => {
    //   this.props.handleInput(this.state.term)
    // })
  }

  render(){
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={this.props.searchTerm} onChange={this.handleChange} />
          <i className="search icon" />
        </div>
      </div>
    )
  }

}

export default Search
