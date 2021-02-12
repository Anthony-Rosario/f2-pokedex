import React, { Component } from 'react';
import pokemonData from '../data.js';


export default class SearchPage extends Component {
    state = {
        pokemon: '',
        sortOrder: '',
        sortBy: 'pokemon',
        filter: '',
        inputVal: ''

    }

    componentDidMount = async () => {
        await this.loadPokemon();
    }
      
    handleClick = async () => {
        await this.loadPokemon();
    }



    loadPokemon = async () => {
        this.setState({
            pokemon:[]
        });

        
        this.setState({
            pokemon: pokemonData.pokemon
        });
    }


    handleChange = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }

    handleInputChance = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }





    render() {
        pokemonData.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
        const filteredPokemon = pokemonData.filter( pokemon => pokemon.pokemon.includes(this.state.inputVal))
        return (
            <>
                Sort By
                <select onChange={this.handleChange}>
                    <option value="pokemon">Name</option>
                    <option value="type">Type</option>
                    <option value="hp">Health</option>
                    <option value="attack">Attack</option>
                </select>
                <input onchange={this.handleInputChange} />
                {filteredPokemon.map(poke => 
                    <div>
                        <p>{poke.pokemon}</p>
                        <img alt={'pokemon'} src={poke.url_image} /> 
                    </div>)}
            </>
        );
    }
}
