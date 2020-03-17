import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import DropDown from './DropDown';
import Search from './Search';



class App extends Component {

state={
  hogs: [],
  filterTerm: "All",
  searchTerm: ""
}

componentDidMount() {

  this.setState( {
    hogs: hogs
  })
}

changeTheSearchTerm = (termOfChild) => {
  this.setState({
    searchTerm: termOfChild
  })
}

changeFilterTerm= (termFromChild) => {
  this.setState({
    filterTerm: termFromChild  
  })
}

returnFilterArray = () => {
  let returnArray = this.state.hogs
  
  if (this.state.filterTerm === "Greased") 
    returnArray= this.state.hogs.filter( (hog) =>{
      return hog.greased
    })

  if (this.state.filterTerm === "Clean") 
    returnArray= this.state.hogs.filter( (hog) =>{
      return !hog.greased
    })

  return returnArray
}

returnSearchArray = () => {
  let filteredArrayByName = this.state.hogs.filter((hog) => {
    return hog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
  })
  return filteredArrayByName
}

  render() {
console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Search 
        searchTerm= {this.state.searchTerm}
        changeTheSearchTerm= {this.changeTheSearchTerm}/>
        <DropDown 
        filterTerm={this.state.filterTerm}
        changeFilterTerm= {this.changeFilterTerm}
        />
       < HogContainer 
       hogs = {this.returnFilterArray()} 
       returnSearchArray = {this.returnSearchArray()}
       />

      
      </div>
    );
  }
}

export default App;
