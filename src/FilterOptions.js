import React, { Component } from 'react'

export default class FilterOptions extends Component {
    render() {
        return (
            <div>
                Sort By
                <select onChange={this.props.handleSortBy}>
                    <option value="pokemon">Name</option>
                    <option value="type_1">Type</option>
                    <option value="hp">Health</option>
                    <option value="attack">Attack</option>
                </select>
                Sort Order
                <select onChange = {this.props.handleSortOrder}>
                    <option value = "Ascending">Ascending</option>
                    <option value = "Descending">Descending</option>
                </select>
            </div>
        )
    }
}
