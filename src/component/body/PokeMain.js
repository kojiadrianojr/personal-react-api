import React, {Component} from 'react';
import RandomPoke from './RandomPoke';
import Stats from './Stats';
import Bag from './Bag';
import Msg from './Msg';

export default class PokeMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            pokeInfo: [],
        }
    }

/*
    componentDidUpdate(prevProps){
    if (this.props.randomPokemon !== prevProps.randomPokemon){
            this.setState({
                pokeInfo: this.props.randomPokemonData
            })    
            console.log(this.state.pokeInfo) 
        }  
    }
*/

    render(){
        
        return(
            <React.Fragment>
                {this.props.exploring?(
                <React.Fragment>
                    <Msg />
                    <RandomPoke getRandomName={this.props.randomPokemonData.forms}   getRandomData={this.props.randomPokemonData} capture={this.props.capture}/>
                    <Stats getRandomData={this.props.randomPokemonData} />
                    <Bag getBag={this.props.bag} />
                </React.Fragment>
                )
                   :
                   (
                    <React.Fragment>
                    <div className="message">
                        <h1>Click Explore to Find Pokemon!!</h1>
                    </div>
                    <div className="display"></div>
                    <div className="stats">Stats:</div>
                    <div className="bag"><h3>Bag</h3></div>
                    </React.Fragment>
                   )}
            </React.Fragment>
        )
    }
}
