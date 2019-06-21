import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FunctionalComponent from './component/functionalComponent';
// import ObjectArray from './component/objectArray';
import NavbarPage from './component/NavbarPage';
import DayTime from './component/DayTime';
import Routing from './config/router'

class App extends Component {

  render() {

    return(
      <NavbarPage />,
      <div>
        <DayTime />
        <Routing />
      </div>
    )
  }
}    
export default App;
