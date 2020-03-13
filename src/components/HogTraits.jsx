import React from 'react'





export default class HogTraits extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        console.log('clicked')
       
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        // console.log(this.props.greased)
        return (
        <div>
            <div style={this.state.clicked ? {display: "block"} : {display: "none"}}>
               I weigh {this.props.weight} tons. I enjoy {this.props.specialty}. I've earned the { this.props.medal } medal.
               {this.props.greased ? "Yes I've been greased" : "I need some Grease"}
            </div>
            <button onClick={this.handleClick}>Show Piggy Deets</button>
        </div>
        
        )
    }
}


