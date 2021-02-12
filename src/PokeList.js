import React, { Component } from 'react';
import PokeItems from './PokeItems.js';


export default class PokeList extends Component {
    render() {
        return (
            <div className="gridContainer">
                <section className="optionsContainer">
                </section>
                <section className="bigContainer">
                {this.props.pokemonArray.map(pokemonObject => 
                <PokeItems 
                    pokemon={pokemonObject.pokemon} 
                    pokemonImage={pokemonObject.url_image} 
                    type={pokemonObject.type_1} 
                    hp={pokemonObject.hp}
                    attack={pokemonObject.attack}
                />
                )};

                </section>
            </div>
        )
    }
}
