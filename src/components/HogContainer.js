import React, { Component } from "react";
import HogTile from "./HogTile";

const HogContainer = (props) => {
  
  let arrayOfHogs = props.hogs.map( (hogObj) => {
    return <HogTile key={hogObj.id}
    hogObj = {hogObj}
    returnSearchArray ={props.returnSearchArray}
    />
  })


  
    return (
      <div>
       {arrayOfHogs} 
      </div>
    );
}

export default HogContainer;