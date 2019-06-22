import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
constructor() {
    super()

    this.state = {
        isLoading: true
    }
}

componentDidMount() {
    setTimeout(() => {
        this.setState({
            isLoading:false
        })
    }, 2000);
}
    render() {

        return(
            <div>
                <h1>Header</h1>
                {this.state.isLoading ? <h2>Loading...</h2> : <h2>someting awesome happened</h2>}
                <h1>Footer</h1>
            </div>
        )
    }
}