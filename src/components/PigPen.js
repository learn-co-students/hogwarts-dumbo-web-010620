import React from "react";
import PigCard from "./PigCard.js"

const PigPen = (props) => {
  
  let arrayOfComponents = props.piggies.map((pig) => {
    return <PigCard key={pig.name} pig={pig}/>
  })
  
  return (
    <div id="Pigs">
      {arrayOfComponents}
    </div>
  ) 
}

export default PigPen;
