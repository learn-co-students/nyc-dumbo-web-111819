import React, { Component } from 'react'
import Filter from './Filter'
import Sort from './Sort'


export default class FilterContainer extends Component {

    render() {
        // console.log("filter cont", this.props)
        return (
            <div>
                <Filter handleFilter={this.props.handleFilter}/>
                <Sort handleSort={this.props.handleSort}/>
            </div>
        )
    }
}
