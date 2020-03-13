import React, { Component } from 'react'
import HogTraits from './HogTraits'

export class PigCard extends Component {



    getPigImages = () => {
        let formattedName = this.props.hogFriend.name
                            .split(" ")
                            .join("_")
                            .toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    }

    


    render() {
        let { name, specialty, greased, weight } = this.props.hogFriend
        
        return (
            <div className="ui eight wide column pigTile">
                
                <p>My homies call me {name}. But you can call me { name } because we're friends too.<br/> <img src={this.getPigImages()}/> </p>
                <HogTraits specialty={ specialty } medal={this.props.hogFriend[`highest medal achieved`]} weight= { weight } greased= { greased }/>
            </div>
        )
    }
}

export default PigCard
