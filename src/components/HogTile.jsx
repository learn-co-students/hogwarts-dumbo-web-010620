import React, { Component } from 'react'
import HogDetail from './HogDetail'

export default class HogTile extends Component{
    state = {
        isClicked: false
    }

    hogImage = hogName => {
        let adjustName = hogName.split(" ").join("_").toLowerCase(); // removes spaces, replaces w/ _ and lowercases everything.
        let pigImages = require(`../hog-imgs/${adjustName}.jpg`)
        return pigImages
    }

    handleClick = () => { // if false, flip flop. etc. etc.
        this.setState({isClicked: !this.state.isClicked })
    }


    render(){
        const { name } = this.props.hog //
        return(
            <div>
                <div>
                    <img src={this.hogImage(name)} alt="hogPictures"/>
                </div>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    {this.state.isClicked ? <HogDetail hog={this.props.hog} /> : null}

                    <button onClick={this.handleClick}>{this.state.isClicked ? "less detail" : "more detail"}</button>
                </div>
            </div>
        )
    }
}