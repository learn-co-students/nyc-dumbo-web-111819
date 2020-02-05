import React from 'react';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import Header from './Header'


import Character from './CharacterComponents/Character'
// import { Cat, Horton, Lorax, Thing1, Thing2 } from './CharacterComponents';

// ROUTING STUFF
import { Route, Switch } from 'react-router'
import { Link, NavLink } from 'react-router-dom'




export default class App extends React.Component {

  state = {
    characters: [
      {
        id: 1,
        name: "The Cat in the Hat",
        gif: "https://media2.giphy.com/media/YrJ9irppjno2c/giphy.gif",
        slug: "cat",
      },
      {
        id: 2,
        name: "Horton",
        gif: "https://media0.giphy.com/media/DkVadqL1Sl5vi/giphy.gif",
        slug: "horton",
      },
      {
        id: 3,
        name: "The Lorax",
        gif: "https://media.giphy.com/media/RlE7socaGwjm/giphy.gif",
        slug: "lorax"
      },
      {
        id: 4,
        name: "Thing1",
        gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
        slug: "thing1",
      },
      {
        id: 5,
        name: "Thing2",
        gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
        slug: "thing2",
      },
    ],
    allClothes: [{name: "Shoe", products: []}, {name: "Top", products: []}, {name: "Pants", products: []}]
  }

  renderCharacter = (routerProps) => {
    let theThingAfterTheDynamicRoute = routerProps.match.params.slug
    let foundChar = this.state.characters.find(charObj => charObj.slug === theThingAfterTheDynamicRoute)
    if (foundChar) {
      return <Character name={foundChar.name} gif={foundChar.gif}/>
    } else {
      return <NotFound/>
    }
  }

  render() {

    let navLinks = this.state.characters.map(char => <li><NavLink to={`/characters/${char.slug}`}>{char.name}</NavLink></li>)
    return (
      <div className="App">
        <header className="App-header">
          <Header/>

            <aside className="sidebar">
              <ul>
                <li>
                  <NavLink exact to="/">Home</NavLink>
                </li>
                { navLinks }
              </ul>
            </aside>
        </header>

        <Switch>
          <Route path="/characters/:slug" render={ this.renderCharacter }/>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>


      </div>
    );
  }

}
