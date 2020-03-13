import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogsData from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigsContainer from "./PigsContainer"


class App extends Component {

  state = {
    hogs: hogsData
  }


  getGreasyPigs = () => {

    let filteredPigs = this.state.hogs.filter((hog) => {return hog.greased === true})

  
    // return filteredPigs;

      this.setState({
        hogs: filteredPigs
      })

    }

  render() {
    
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <PigsContainer className="ui-grid-container" hogs={this.state.hogs} greasyPigs={this.getGreasyPigs}/>
      </div>
    );
  }
}

export default App;
