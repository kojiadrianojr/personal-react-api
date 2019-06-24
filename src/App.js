import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import PokeApi from './config/apiConfig';
import PokeHeader from './component/Header/PokeHeader';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      regions: [],
      locations: [],
      area: [],
      pokemonEncounter: [],
      currPokemon: [],
    }
  }

  render(){
    return (
      <PokeHeader regions={this.state.regions} locations={this.state.locations} area={this.state.area} />
    )
  }

}
