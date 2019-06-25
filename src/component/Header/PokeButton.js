import React from 'react';
import '../fonts/fonts.css';

const buttonStyle = {
    backgroundColor: 'white',
    padding: '5px',
}


export default function PokeButton({expArea}){
    return (
        <React.Fragment>
            <button onClick={expArea} className="ps2p" style={buttonStyle}>Explore</button>
        </React.Fragment>
    )
}