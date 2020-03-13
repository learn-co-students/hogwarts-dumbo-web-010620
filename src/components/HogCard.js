import React, { Component } from "react";


class HogCard extends Component {


    render(){
        return
            <div className="pigTile">
                {/* <img src={`.src/hog-img/${this.props.name.join('').jpeg}`}></img>` */}
                {this.props.name}

            </div>
        )
    }
}

export default HogCard