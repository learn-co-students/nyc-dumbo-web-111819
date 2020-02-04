import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3001/pokemon?_limit=20")
    .then(r => r.json())
    .then(pokemonArray => {
      this.setState({
        pokemons: pokemonArray
      })
    })
  }

  handleInput = (theTextThatIAmTyping) => {
    this.setState({
      searchTerm: theTextThatIAmTyping
    })
  }

  handleSubmissionOfForm = (pokeObj) => {
    let copiedPokemonObj = {
      name: pokeObj.name,
      sprites: {
        front: pokeObj.frontUrl,
        back: pokeObj.backUrl
      },
      stats: [{name: 'hp', value: parseInt(pokeObj.hp)}]
    }

    let addedArray = [...this.state.pokemons, copiedPokemonObj]

    this.setState({
      pokemons: addedArray
    })
  }


  decideWhichPokemonsToRender = () => {
    let filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return filteredPokemons
  }


  render() {
    console.log(this.state.searchTerm);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmissionOfForm={this.handleSubmissionOfForm}/>
        <br />
        <Search searchTerm={this.state.searchTerm} handleInput={this.handleInput} />
        <br />
        <PokemonCollection pokemons={this.decideWhichPokemonsToRender()}/>
      </Container>
    )
  }
}
















export default PokemonPage
