import React, { Component } from 'react'

export class PigDeets extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        
        return (
            <div>
                <div style={this.state.clicked ? {display:'none'} : {display:'block'}}>
                    Weight: {this.props.weight}<br/>
                    Specialty: {this.props.specialty}<br/>
                    Medal: {this.props.medal}<br/>
                    Greased: {this.props.greased ? 'Yes' : 'No! Grease Me Baby'}
                </div>
                <button onClick={this.handleClick} >See Mo/No Deets</button>
            </div>
        )
    }
}

export default PigDeets
