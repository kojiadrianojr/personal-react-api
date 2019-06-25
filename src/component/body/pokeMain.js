import React, {Component} from 'react';


export default class pokeMain extends Component{
  
    render(){
        return(
            <React.Fragment>
                <div className="message">Message</div>
                <div className="display">Display</div>
                <div className="stats">Stats</div>
                <div className="bag">Bag</div>
            </React.Fragment>
        )
    }
}