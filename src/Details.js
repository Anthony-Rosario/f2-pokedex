import React, { Component } from 'react';
import request from 'superagent';
import Spinner from './Spinner.js';
import './App.css';



export default class Details extends Component {
    state = {
        pokemon: {}
    }

    componentDidMount = async () => {
        this.setState({
            loading: true
        });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            pokemon: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName)
        });
    }


    render() {
        return (
            <>
            {this.state.loading ? <Spinner /> :
            <div className="pokeContainer" key={this.state.pokemon.pokemon}>
                <h2>{this.state.pokemon.pokemon}</h2>
                <img src={this.state.pokemon.url_image} alt={this.state.pokemon}/>
                <p className="attack">Attack: {this.state.pokemon.attack}</p>
                <p className="type">Type: {this.state.pokemon.type_1}</p>
                <p className="health">Health: {this.state.pokemon.hp}</p>   
            </div>
            }
            </>
        )
    }
}
