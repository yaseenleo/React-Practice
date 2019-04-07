import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import SweetAlert from 'sweetalert-react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      email: "admin@gmail.com",
      pass: "admin",
      // logedIn :false
      isUser : false,
      addForm : false,
      // logOut : false
  }
 
}

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
  if(email=== "admin@gmail.com" && pass === "admin"){
    alert("login success")
    // <SweetAlert
    //   // show={this.state.isUser}
    //   title="login success"
    //   text="welcome user"
    // />
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
    </div>,
    <br />,
    <div>
      
    </div>
  )
}

  render() {
    const {isUser,addForm} = this.state
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
       
      </div>
    );
  }
}

export default App;
