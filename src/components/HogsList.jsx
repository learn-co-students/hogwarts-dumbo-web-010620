import React from 'react'
import HogTile from "./HogTile"

const HogsList = ({hogs}) => {
    return (
        <div>
            <h2>Hello from HogsList</h2>
            {hogs.map(hog => (
                <HogTile
                    key={hog.id}
                    hog={hog}
                />
            ))}
        </div>
    )
}

export default HogsList