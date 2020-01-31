import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import FilterContainer from './FilterContainer'
import hogs from '../porkers_data';

class App extends Component {

  // send the callback function down to filter container & filter
// invoke it in filter

  state={
    sortValue: "All",
    filterValue: false
  }

  handleSort = (newSortValue) => {
    this.setState({
      sortValue: newSortValue
    })
  }

  handleFilter = () => {
    this.setState(prevState => {
      return {
        filterValue: !prevState.filterValue
      }
    })
    }
  
  sortHogs = () => {
    let {sortValue} = this.state

    if(sortValue === "Name"){
      return [...hogs].sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name)
      }
      )
    } else if (sortValue === "Weight"){
      return [...hogs].sort((hogA, hogB) => {
        return hogA.weight - hogB.weight
      })
    // } else if (sortValue === "Weight"){
    //   return [...hogs].sort((hogA, hogB) => {
    //     if (hogA.weight > hogB.weight) {
    //       return 1
    //     } else if (hogA.weight < hogB.weight) {
    //       return -1
    //     } else {
    //       return 0
    //     }
    //   })
    } else {
      return [...hogs]
    }
  }

  applyFilter = (finalHogs) => {
    let {filterValue} = this.state
    if (filterValue){
      return finalHogs.filter(hog => hog.greased)
    } else {
      return finalHogs
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < FilterContainer handleSort={this.handleSort} handleFilter={this.handleFilter}/>
          < HogContainer hogs={this.applyFilter(this.sortHogs())}/>
      </div>
    )
  }
}

export default App;
