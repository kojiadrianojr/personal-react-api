import React from 'react';


export default function Bag({getBag}){
    
    return(
        <div className="bag">
            <h3>Bag:</h3>
            {
              getBag.map(poke=>(
                  <React.Fragment>
                  <p>{poke.name}</p>
                  <img src={poke.sprites.front_default}/>
                  </React.Fragment>
              ))
        }
        </div>
    )
}