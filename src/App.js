import React, {Component} from 'react';

import {PokeApi} from './config/apiConfig';
import PokeHeader from './component/Header/PokeHeader';
import PokeMain from './component/body/pokeMain';


import './App.css';

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
      bag: [],
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

  handleRegionChange = (name) => {
    PokeApi.get(`region/${name}`).then(res=>{
      return res
    }).then(res => {
      this.setState({
        locations: res.data.locations
      })
      return res
    })
    .then(res => {
      return PokeApi.get(`location/${res.data.locations[0].name}`)
      .then(loc=>{
        this.setState({
          areas: loc.data.areas
        })
        return loc
      })
    })
    .then(res=>{
      return PokeApi.get(`location-area/${res.data.areas[0].name}`)
      .then(poks => {
        this.setState({
          pokemonEncounter: poks.data.pokemon_encounters
        })
      })
    }).catch(err => {
      this.setState({
        pokemonEncounter: [],
      })
      return 'empty'
    })
  }

  handleLocationChange = (name) => {
    PokeApi.get(`location/${name}`).then(res=>{
      return res.data.areas
    }).then(ar => {
      this.setState({
        areas: ar
      })
      return ar
    }).then(ar => {
      return PokeApi.get(`location-area/${ar[0].name}`)
      .then(poks => {
        this.setState({
          pokemonEncounter: poks.data.pokemon_encounters
        })
      })
    }).catch(err=>{
      return 'empty'
    })
  }

  handleAreaChange = (name) => {
    PokeApi.get(`location-area/${name}`).then(res=>{
      return res.data.pokemon_encounters
    }).then(poks => {
      this.setState({
        pokemonEncounter: poks
      })
    })
  }

  explore = () => {
    var totalEncounter = this.state.pokemonEncounter.length
    var randomPoks = Math.floor(Math.random() * totalEncounter)
    this.setState({
      currPokemon: this.state.pokemonEncounter[randomPoks]
    })

  }


  render(){
    return (
     <div className="App">
      <PokeHeader 
        regions={this.state.regions} 
        locations={this.state.locations} 
        areas={this.state.areas} 
        changeRegion={this.handleRegionChange}
        changeLocation={this.handleLocationChange} 
        changeArea={this.handleAreaChange}
        isLoaded={this.state.isLoaded}
        explore={this.explore}
        />
        <div className="pokeContainer">
          <PokeMain/>          
        </div>
   </div>
    )
  }

}
