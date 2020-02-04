import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false,
  }

  handleFlip = () => {
    // let whatTheBooleanWillBecome = !this.state.flipped

    // this.setState({
    //   flipped: whatTheBooleanWillBecome
    // })

    this.setState(prevState => {
      return {flipped: !prevState.flipped}
    })

  }

  render() {
    let {name, sprites:{front, back}, stats, sprites} = this.props.pokemon
    let foundStatObj = stats.find(statObj => statObj.name === "hp")
    console.log(foundStatObj);

    return (
      <Card onClick={this.handleFlip}>
        {this.state.flipped ? <p>Back</p> : <p>Front</p> }
        <div>
          <div className="image">
            <img alt="oh no!" src={ this.state.flipped ? back : front } />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {foundStatObj.value} HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
