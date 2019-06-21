import React, { Component } from 'react';

class StatePractice extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn : true
        }

    }
    render() {

        let wordDisplay;
        if(this.state.isLoggedIn) {  // if this.state.isLoggedIn is true
            wordDisplay = "In"
        }
        else{
            wordDisplay = "Out"
        }

        return(
            <div>
                <h2>Your are currently Logged {wordDisplay}</h2>
            </div>
        )
    }
}

export default StatePractice