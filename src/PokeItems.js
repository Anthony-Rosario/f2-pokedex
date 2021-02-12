import React, { Component } from 'react'
import './App.css';

export default class PokeItems extends Component {
    render() {
        return (
            <div className="pokeContainer">
                <h2>{this.props.pokemon}</h2>
                <img src={this.props.pokemonImage} alt={this.props.pokemon}/>
                <p>Attack: {this.props.attack}</p>
                <p>Type: {this.props.type}</p>
                <p>Health: {this.props.hp}</p>
            </div>
        )
    }
}
