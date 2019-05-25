import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  render() {

    const arr = [
      [
        {
          name: 'Kashif',
          age: 50
        },
        {
          name: 'Wasif',
          age: 20
        },
        {
          name: 'Javed',
          age: 12
        },
      ],
      [
        {
          name: 'Harry',
          age: 50
        },
        {
          name: 'Kawish',
          age: 20
        },
        {
          name: 'Kamran',
          age: 12
        },
      ]
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-Title">Welcome to</h1>

        </header>
        <ul>
          {arr.map((value, index)=>{
            
            return(
              value.map((obj,objIndex)=>{
                console.log(objIndex)
                return(
                  <li key={objIndex}>Name: {obj.name}, Age: {obj.age}</li>
                );
              })
            );
            })
          }
        </ul>
      </div>
    )
  }
}

