import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      email: "noor@gmail.com",
      pass: "noor15",
      // logedIn :false
      isUser : false,
      addForm : false,
      // logOut : false
  }
 
}
// reLI(){
//   this.setState({
//     logedIn :true
//   })
// }
renderEmployees(){
  return(
    <div>
      <h1>Employee</h1>
      <button onClick={()=>{this.setState({
         addForm : true
      })}}>
         Add Form
      </button>
      <ul>
        <li>kashif</li>
        <li>fahad</li>
        <li>usman</li>
      </ul>
     </div>
  )
}
renderAddForm(){
  return(
    <div>
      <h1>Add Employ Form</h1>
      <button onClick={()=>{
        this.setState({
           isUser : false ,
           addForm : false
        })
      }}
      >LogOut</button>
      <br/>
      <br/>
      <input placeholder="Enter Name"/> <br/>
      <button onClick={()=>{
        this.setState({
          isUser : true ,
          addForm : false
        })
      }}>
        Add
      </button>
    </div>
  )
}
login(){
  const {email,pass} = this.state;
  console.log('email, password ======>')
  console.log(email, pass);
  if(email=== "noor@gmail.com" && pass === "noor15"){
    alert("login success")
    this.setState({
      isUser : true
    })
  }
  else{
    alert("login fail")
  }
}
renderLogIn() {
  return(
    <div>
      <h1>login</h1>
      <div>
       Email :  <input
          placeholder="enter name" value={this.state.email}
          onChange={(e) =>{
            this.setState({email:e.target.value})
          }}

        />
        <br />
        <br />
       Password :  <input
          placeholder="enter password"  value={this.state.pass}
          type="password"
          onChange={(e) =>{
            this.setState({pass:e.target.value})
          }}
          
        />
        <br />
        <br />

        <button onClick={()=>this.login()}>login</button>
      </div>
    </div>
  )
}

  render() {
    const {logedIn,isUser,addForm} = this.state
    return (
      <div className="App">
      <header className="App-Header">
      {/* {this.renderLogIn()} */}
      <div>
        {!isUser && this.renderLogIn()}
        {isUser && !addForm && this.renderEmployees()}
        {isUser && addForm && this.renderAddForm()}
        
      </div>
      </header>
        {/* <header className="App-header">
         {!logedIn && this.renderLogIn()}
         {logedIn && this.renderEmployees()}
        </header> */}
      </div>
    );
  }
}

export default App;
