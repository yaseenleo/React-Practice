import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{

  constructor() {

    super()
    this.state={
      text:"hello world",
      number:0,
    }
    // this.updateState = this.updateState.bind(this)
  }

  updateState(){
    this.setState({
      text: "Hello Yaseen",
      number: ++this.state.number,
    })
  }

  render() {
    
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={()=>{this.updateState()}}>Welcome {this.state.text}, Number ==> {this.state.number}</h1>
      </header>
    </div>
    )
  }
}
