import React, { Component } from "react";

class DropDown extends Component {

handleSubmit = (e) => {
    this.props.changeFilterTerm(e.target.value);
}

  render() {
// console.log(this.props.filterTerm)
    return (
       <select value={this.props.filterTerm} onChange={this.handleSubmit}>
        <option value="All">All</option>
        <option value="Greased">Greased</option>
        <option value="Clean">Clean</option>
      </select>
    );
  }
}

export default DropDown;
