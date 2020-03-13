import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigPen from "./PigPen";
import Dropdown from "./Dropdown";

class App extends Component {

  state={
    piggies: [],
    filterTerm: "Greased"
  }

  componentDidMount(){
    this.setState({
      piggies: hogs
    })
  }

  changeFilterTerm = (termFromChild) => {
    this.setState({
      filterTerm: termFromChild
    })
  }

  returnAnArray = () => {
    let theArrayToReturn = this.state.piggies
    if (this.state.filterTerm === "Greased") {
      theArrayToReturn = this.state.piggies.filter((pig) => {
        return pig.greased
      })
    }
    if (this.state.filterTerm === "Clean") {
      theArrayToReturn = this.state.piggies.filter((pig) => {
        return !pig.greased
      })
    } 
    return theArrayToReturn
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Dropdown 
          filterTerm={this.state.filterTerm} 
          changeFilterTerm={this.changeFilterTerm}
        />
        <PigPen piggies={this.returnAnArray()}/>
      </div>
    );
  }
}

export default App;
