import React from 'react'

const HogDetail = ({hog}) => {
    const { specialty, greased, weight } = hog
    const medal = hog['highest medal achieved']

    return (
        <div className="description">
            <h4>My specialty: {specialty} </h4>
            <h5>{greased ? "Greasy Hog" : "Clean Hog"}</h5>
            <p>Highest Medal I Achieved: <strong>{medal}</strong></p>
            <h4>I weigh {weight} stones.</h4>
            <p>A stone weighs about 14lbs (incase you were wondering).</p>
        </div>
    )
}

export default HogDetail