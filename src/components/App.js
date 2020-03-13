import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data"; // data
import HogsList from "./HogsList"; //Hog list.
import Dropdown from "./Dropdown" //Dropdown menu.

class App extends Component {

  state = {
    hogs: [],
    filterTerm: "Greased"
  }

  componentDidMount(){
    // fetch here
    this.setState({hogs: hogs})
  }

  changeFilterTerm = (termFromChild) => {
    this.setState({
      filterTerm: termFromChild
    })
  }

  returnAnArray = () => {
    let theArrayToReturn = this.state.hogs
    //the pigs.
    if (this.state.filterTerm === "Greased") {
      theArrayToReturn = this.state.hogs.filter((pig) => {
        return pig.greased
      })
      // filters the hogs 
    }

    if (this.state.filterTerm === "Clean") {
      theArrayToReturn = this.state.hogs.filter((pig) => {
        return !pig.greased
      })
    }

    return theArrayToReturn
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Dropdown 
          filterTerm={this.state.filterTerm}
          changeFilterTerm={this.changeFilterTerm}
        />
        <HogsList hogs={this.returnAnArray()}/>
      </div>
    )
  }
}

export default App;
