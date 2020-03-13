import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogsData from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigsContainer from './PigsContainer.jsx'

class App extends Component {
  state = {
    hogs: hogsData
  }

  getGreasedPigs = () => {
    let filteredPigs = this.state.hogs.filter(hog => {return hog.greased === true}
    )
    
    
    this.setState({
      hogs: filteredPigs
    })
  
  }
  render() {
    
    return (
      <div className="App">
        <Nav />
        <HelloWorld/>
        <PigsContainer 
        hogs={this.state.hogs}
        greasedPigs={this.getGreasedPigs}
        />
      </div>
    );
  }
}

export default App;
