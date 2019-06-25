import React, {Component} from 'react';
import './App.css';

import {PokeApi} from './config/apiConfig';
import PokeHeader from './component/Header/PokeHeader';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoaded: false,
      regions: [],
      locations: [],
      areas: [],
      pokemonEncounter: [],
      currPokemon: [],
    }
  }

  componentDidMount(){
    PokeApi.get('region')
    .then(res => {
      return {
        regions: res.data.results,
     };
    })
    .then(reg => {
      return PokeApi
      .get(`region/${reg.regions[0].name}`).then(res=>{
        reg.locations = res.data.locations;
        return reg;
      })
    })
    .then(reg => {
      return PokeApi
      .get(`location/${reg.locations[0].name}`)
      .then(res=> {
        reg.areas = res.data.areas;
        return reg
      })
    })
    .then(reg => {
      return PokeApi
      .get(`location-area/${reg.areas[0].name}`)
      .then(res=> {
        reg.pokemonEncounter = res.data.pokemon_encounters;
        return reg
      })
      .then(reg => {
        console.log(reg)
        this.setState({
          isLoaded: true,
          regions: reg.regions,
          locations: reg.locations,
          areas: reg.areas,
          pokemonEncounter: reg.pokemonEncounter,
        })
      })
    })
  }

  handleLocationChange = (name) => {
    console.log('Location: ', name);
  }


  render(){
    return (
      <PokeHeader regions={this.state.regions} locations={this.state.locations} areas={this.state.areas} changeLocation={this.handleLocationChange} isLoaded={this.state.isLoaded} />
    )
  }

}
