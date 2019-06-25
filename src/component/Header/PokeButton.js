import React from 'react';
import '../fonts/fonts.css';

const buttonStyle = {
    backgroundColor: 'white',
    border: '2px dotted #084152',
    padding: '5px',
}


export default function PokeButton(){
    return (
        <React.Fragment>
            <button className="ps2p" style={buttonStyle}>Explore</button>
        </React.Fragment>
    )
}