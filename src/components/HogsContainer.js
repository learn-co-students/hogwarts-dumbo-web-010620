import React, { Component } from "react";
import HogCard from './HogCard.js'

class HogContainer extends Component {

  generateHogs = () => {
    return this.props.hogs.map(hogObj => 
    <HogCard name={hogObj.name} specialty={hogObj.specialty} greased={hogObj.greased} weight={hogObj.weight} highestMedal={hogObj['highest medal achieved']}/>
    
    ) 
    
  }

  render() {
    return (
      <div>
     

      {this.generateHogs()}
   
      </div>


    );
  }
}

export default HogContainer;
