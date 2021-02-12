import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <>
                <input placeholder = "search Pokemon!" onChange={this.props.handleInputValue} />
            </>
        )
    }
}
