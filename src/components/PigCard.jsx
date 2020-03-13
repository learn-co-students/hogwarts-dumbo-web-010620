import React, { Component } from 'react'
import PigDeets from './PigDeets';


export class PigCard extends Component {
        state = {
              pigs: this.props
        }
        getImage = () => {
            let picName = this.props.hog.name
            .split(' ')
            .join('_')
            .toLowerCase()
            let pigImage = require(`../hog-imgs/${picName}.jpg`)
            return pigImage;
        }

        // handleSeeMore = (prevState, prevProps) => {
        //     this.setState({
        //         specialty: this.prevProps.hog
        //     })
        // }

        render() {
          
        let {name, specialty, greased, weight } = this.props.hog
        return (
            <div className="ui eight wide column pigTile">
                <img src={this.getImage()} alt={name}/>
                <h1>{name}</h1>
                
                <PigDeets
                   
                    specialty={specialty}
                    greased={greased}
                    weight={weight}
                    medal={this.props.hog['highest medal achieved']}
                
                />
            </div>
        )
    }
}

export default PigCard
