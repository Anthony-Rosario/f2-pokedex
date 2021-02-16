import React, { Component } from 'react'

export default class SortOptions extends Component {
    render() {
        return (
            <div>
                <h1>Sort By</h1>
                <select onChange = {this.props.handleSortBy} className="filterTypes">
                    <option value="pokemon">Name</option>
                    <option value="type_1">Type</option>
                    <option value="hp">Health</option>
                    <option value="attack">Attack</option>
                </select>
                <h1>Sort Order</h1>
                <select onChange = {this.props.handleSortOrder} className="sortOrder">
                    <option value = "asc">Ascending</option>
                    <option value = "desc">Descending</option>
                </select>
            </div>
        )
    }
}
