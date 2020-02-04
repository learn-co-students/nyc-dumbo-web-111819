import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    let pokemonCards = this.props.pokemons.map(pokemonObj => <PokemonCard key={pokemonObj.id} pokemon={pokemonObj}/>)
    return (
      <Card.Group itemsPerRow={6}>
        { pokemonCards }
      </Card.Group>
    )
  }
}



export default PokemonCollection
