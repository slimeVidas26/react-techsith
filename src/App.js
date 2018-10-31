import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    name : "Techsith"
  }

  changeName= (newName) =>{
    this.setState({
        name : newName
    });
  }
  changeNameFromInput= (event) =>{
    this.setState({
        name : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <br/>  <br/>
        <button onClick = {()=> this.changeName('Awesome Techsith anonymous')}>Change state using anonymous function</button>
        <button onClick = { this.changeName.bind(this,'Awesome Techsith binding')}>Change state using binding function</button>

        <br/>  <br/>
        <input type="text" onChange = {this.changeNameFromInput} value = {this.state.name}/>
        <div>{this.state.name}</div>

     
      </div>
    );
  }
}

export default App;
