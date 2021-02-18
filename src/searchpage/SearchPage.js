import React, { Component } from 'react';
import PokeList from '../PokeList.js';
import Input from '../Input.js';
import request from 'superagent';
import SortOptions from '../SortOptions.js';



export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortOrder: 'asc',
        sortBy: 'pokemon',
        inputVal: '',
        loading: false,
        pokemonTotal: 0,
        currentPage: 1,
        perPage: 20,
    }
    

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    
    componentDidUpdate = async (prevProps, prevState) => {
        const oldPageNum = prevState.currentPage;
        const newPageNum = this.state.currentPage;

        if (oldPageNum !== newPageNum) {
            await this.fetchPokemon();
        }
    }


    fetchPokemon = async () => {

        this.setState({ loading: true})

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.inputVal}&page=${this.state.currentPage}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}`)

        this.setState({
            loading: false, 
            pokemon: data.body.results,
            pokemonTotal: data.body.count,
    })
}

    handleSortBy = async (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }


    handleInputValue = async (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    handleSortOrder = async (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }


    handleClick = async () => {
        await this.setState({ currentPage: 1})

        await this.fetchPokemon();
    }


    handleNextPage = async () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    handlePreviousPage = async () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }

    render() {
        // const sortOptions = typeof this.state.pokemon[0][this.state.sortBy];
        
        // if(this.state.sortOrder === 'Ascending') {
        //     if(sortOptions === 'string') this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
        //     if(sortOptions === 'number') this.state.pokemon.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy]);
        // }
        // else {
        //     if(sortOptions === 'string') this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]));
        //     if(sortOptions === 'number') this.state.pokemon.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy]);
        // }
    
        // const filteredPokemon = pokemonData.filter( pokemon => pokemon.pokemon.includes(this.state.inputVal))
        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);

        return (
            <div>
                <button disabled={this.state.currentPage === 1} onClick={this.handlePreviousPage}>Last</button>
                <h3>Page {this.state.currentPage}</h3>
                <button disabled={this.state.currentPage === lastPage} onClick={this.handleNextPage}>Next</button>
                <section>
                    <SortOptions handleSortBy={this.handleSortBy} handleSortOrder={this.handleSortOrder} />
                </section>
                <Input handleInputValue={this.handleInputValue} sortBy={this.state.sortBy} handleClick={this.handleClick} /> 
                <PokeList loading={this.state.loading} pokemonArray={this.state.pokemon} />
            </div>
        );
    }
}
