import React, { Component } from 'react'

export default class Dropdown extends Component {

    handleChange = (e) => {
        this.props.changeFilterTerm(e.target.value)
    }

    render() {
        return (
            <select value={this.props.filterTerm} onChange={this.handleChange}>
                <option value ="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Clean">Clean</option>
            </select>
        )
    }
}

