import React from 'react';


export default function Stats({getRandomData}){
    return (
        <div className="stats">
            Stats:
            <p>{getRandomData.stats[0].stat.name}: {getRandomData.stats[0].base_stat}</p>
            <p>{getRandomData.stats[1].stat.name}: {getRandomData.stats[1].base_stat}</p>
            <p>{getRandomData.stats[2].stat.name}: {getRandomData.stats[2].base_stat}</p>
            <p>{getRandomData.stats[3].stat.name}: {getRandomData.stats[3].base_stat}</p>
            <p>{getRandomData.stats[4].stat.name}: {getRandomData.stats[4].base_stat}</p>
            <p>{getRandomData.stats[5].stat.name}: {getRandomData.stats[5].base_stat}</p>
        </div>
    )
}