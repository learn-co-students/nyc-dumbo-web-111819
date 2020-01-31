import React, { Component } from 'react'

// const medal = 'highest medal achieved';

export default class PigTile extends Component {

    render() {
        // console.log("pigtile props", this.props)
        let {name: pigName, specialty, 'highest medal achieved': medal} = this.props.hog
        // console.log("pigtile props", pigName)

        // let slug = pigName.toLowerCase().split(" ").join("_")
        let slug = pigName.toLowerCase().replace(/\s/g, "_")
        // console.log(slug)
        return (
            <div>
               <h1>{pigName}</h1>
               <p>Medal: {medal}</p>
               <p>Specialty: {specialty}</p>
               <img src={`/hog-imgs/${slug}.jpg`} alt=""/>
            </div>
        )
    }
}
