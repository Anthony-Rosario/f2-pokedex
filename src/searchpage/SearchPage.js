import React, { Component } from 'react';
import pokemonData from '../data.js';
import PokeList from '../PokeList.js';
import Input from '../Input.js';
import FilterOptions from '../FilterOptions.js';


export default class SearchPage extends Component {
    state = {
        pokemon: pokemonData,
        sortOrder: 'Ascending',
        sortBy: 'pokemon',
        inputVal: ''

    }
      
    
    
    handleSortBy = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }


    handleInputValue = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    handleSortOrder = (e) => {
        this.setState({
            sortOrder: e.target.value
        })
        console.log(this.sortOrder)
    }





    render() {
        const sortOptions = typeof this.state.pokemon[0][this.state.sortBy];
        
        if(this.state.sortOrder === 'Ascending') {
            if (sortOptions === 'string') this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
            if(sortOptions === 'number') this.state.pokemon.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy]);
        }
        else {
            if (sortOptions === 'string') this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]));
            if(sortOptions === 'number') this.state.pokemon.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy]);
        }
    
        // pokemonData.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
        const filteredPokemon = pokemonData.filter( pokemon => pokemon.pokemon.includes(this.state.inputVal))
        
        return (
            <div>
                <section>
                    <FilterOptions handleSortBy={this.handleSortBy} handleSortOrder={this.handleSortOrder} />
                </section>
                <Input handleInputValue={this.handleInputValue} sortBy={this.state.sortBy} /> 
                <PokeList 
                pokemonArray={filteredPokemon} 
                
                />
            </div>
        );
    }
}
