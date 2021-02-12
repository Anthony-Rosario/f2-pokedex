import React, { Component } from 'react'
import './App.css';

export default class PokeItems extends Component {
    render() {
        return (
            <div className="pokeContainer">
                <h2>{this.props.pokemon}</h2>
                <img src={this.props.pokemonImage} alt={this.props.pokemon}/>
                <p>{this.props.attack}</p>
                <p>{this.props.type}</p>
                <p>{this.props.hp}</p>
            </div>
        )
    }
}
