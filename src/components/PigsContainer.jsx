import React from 'react'
import PigCard from './PigCard'
const PigsContainer = (props) => {

    let arrayOfPigs = props.hogs.map((hoggy) => {
        
        return <PigCard 
                    key = {hoggy.id}
                    hogFriend = { hoggy }
               />
    })


   const handleClick = () => {
        props.greasyPigs()
//May need to incorporate state or try something totally different
//I wanted this to show the filtered Greasy Pigs or show all Pigs when clicked again. I got lost in the sauce
    }

    return (
        <div>
        <button onClick={handleClick}>To show these Greasy Pigs or All the Pigs</button>
        <div className="ui grid container">
            {arrayOfPigs}
        </div>
        </div>
    )
}

export default PigsContainer
