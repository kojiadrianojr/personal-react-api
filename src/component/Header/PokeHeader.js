import React from 'react';

import PokeLogo from './PokeLogo';
import PokeButton from './PokeButton';
const selectStyle = {
    margin: '0 8px',
    minWidth: '80px',
}



function PokeSelector({handleChange, item}){
    return (
        <select
        onChange={e=> handleChange(e.target.value)}
        style={selectStyle}
        disabled={!item.length}
        >
            {item.map(item=> (
                <option key={item.name} value={item.name}>
                    {item.name}
                </option>
            ))}
        </select>
    )
}


const headerDesign = {
    backgroundColor: '#EF5350',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '8px',
    
}

const selectorPos = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '20%',
}


function PokeHeader({
    isLoaded,
    changeLocation,
    regions = [],
    locations = [],
    areas = [],
}) {
    return (
        <header style={headerDesign}>
            <PokeLogo />
            <div style={selectorPos}>
            <PokeSelector handleChange={changeLocation} item={regions}/>
            <PokeSelector item={locations}/>
            <PokeSelector item={areas}/>
            <PokeButton />
            </div>
        </header>
    )
}

export default PokeHeader