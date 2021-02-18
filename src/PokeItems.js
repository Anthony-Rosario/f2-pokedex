import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default class PokeItems extends Component {
    render() {
        return (
            <Link to={this.props.pokemon}> 
                <div className="pokeContainer" key={this.props.pokemon}>
                    <h2>{this.props.pokemon}</h2>
                    <img src={this.props.pokemonImage} alt={this.props.pokemon}/>
                    <p className="attack">Attack: {this.props.attack}</p>
                    <p className="type">Type: {this.props.type}</p>
                    <p className="health">Health: {this.props.hp}</p>
                </div>
            </Link>
        )
    }
}
