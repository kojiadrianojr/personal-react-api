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
        onChange={e => handleChange(e.target.value)}
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
    changeRegion,
    changeLocation,
    changeArea,
    explore,
    regions = [],
    locations = [],
    areas = [],
}) {
    return (
        <header style={headerDesign}>
            <PokeLogo />
            <div style={selectorPos}>
            {!isLoaded? (
                'Loading ...'
            ): (
            <React.Fragment>
                <PokeSelector handleChange={changeRegion} item={regions}/>
                <PokeSelector handleChange={changeLocation} item={locations}/>
                <PokeSelector handleChange={changeArea} item={areas}/>
                <PokeButton expArea={explore} />
            </React.Fragment>
            )}    
            </div>
        </header>
    )
}

export default PokeHeader