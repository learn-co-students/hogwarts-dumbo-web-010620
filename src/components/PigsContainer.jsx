import React from 'react'
import PigCard from './PigCard'
 

const PigsContainer = (props) => {
   
    let arrayOfComponents = props.hogs.map(hogObj => {
        return <PigCard 
                    key={hogObj.id}
                    hog={hogObj} 
                />
    })

   const handleClick = (e) => {
        let pigs = props.greasedPigs()
        //there is a filtered pig array in the props. 
        //I wanted to make this button toggle between greased and ungreased pigs, 
        //but found out we cant toggle without state
   }
    
   
    return (
        <div>
             <button onClick={handleClick}>Show All or Greased Pigs</button>
            <div className="ui grid container">
            
                { arrayOfComponents }
            </div>
        </div>
    )
}

export default PigsContainer
