import React, { Component } from "react";
import HogContainer from "./HogContainer";

class HogTile extends Component {

    state={
      clicked: false
    }
    
    changeState = (e) =>{
        this.setState({
            clicked: !this.state.clicked
        })
    }
    
      render() {
        let {name, specialty, weight, greased, ['highest medal achieved']: medal} = this.props.hogObj
        let theImageName = name.toLowerCase().split(" ").join("_")
        return (

          <div className = "pigTile" onClick={this.changeState} >
              <h2>Name: {name}</h2>
              <img src={require("../hog-imgs/" + theImageName + ".jpg")} alt={name}/>

              {this.state.clicked ?
              <div>
              <h2>Specialty: {specialty}</h2>
              <h2>Weight: {weight}</h2>
              <h2>greased: {greased ? "True" : "False"}</h2>
              <h2>Medal: {medal}</h2>
              </div>
              :
              null
              }
            
          
           
          </div>
        );
      }
    }
export default HogTile;