import React from 'react';


export default function RandomPoke({getRandomData, getRandomName, capture}){
    
    return (
        <div className="display">
            <button className="btn" onClick={()=>capture(getRandomData)}>Catch!</button>

        
            <p> {getRandomName[0].name}</p>
            <img alt="imahe" src={getRandomData.sprites.front_default} />
            

        </div>
    )
}