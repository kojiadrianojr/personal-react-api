import React from 'react';

const logoCont =  {
    border: '1px solid black',
    maxHeight: '35px',
    maxWidth: '100px',
    overflow: 'hidden',
}

const logoStyle = {
    position: 'relative',
    top: '-33px',
    height: '100px',
}

function PokeLogo() {
    return (
        <div style={logoCont}>
           <img
            src="https://boomcamp.github.io/poke-catcher/images/pokemon-logo.png"
            alt="logo"
            style={logoStyle}
           >
           </img>
        </div>
    );
}

export default PokeLogo;