import React, { Component } from 'react';

export default class Iteration extends Component{

constructor() {
    super()

    this.state = {
        num: 0
    }
    this.increament = this.increament.bind(this)
    this.decreament = this.decreament.bind(this)
}

increament() {
    this.setState( (prevState) => {
        return {
            num: prevState.num + 1  
        } 
    } )
}

decreament() {
    this.setState((prevState) =>{
        return {
            num: prevState.num -1
        }
    })
}
    render() {

        return(
            <div style={{textAlign:"center"}}>
                <h2>{this.state.num}</h2>
                <button onClick={this.increament}>Increament</button>
                <button onClick={this.decreament}>Decreament</button>
            </div>
        )
    }
}