import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data"; // data
import HelloWorld from "./HelloWorld"; // test page.
import HogsList from "./HogsList"; //Hog list.

class App extends Component {

  state = {
    hogs: hogs
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <HogsList hogs={hogs}/>
      </div>
    )
  }
}

export default App;
