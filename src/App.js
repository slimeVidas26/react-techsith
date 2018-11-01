import React, { Component } from 'react';
import './App.css';
import Child from './components/parentToChild/child';
import Parent from './components/parentToChild/parent';




class App extends Component {
 state={
   titlePrimary:'Click me',
   titleWarning:'Click me',
   

 }

 changeTitlePrimary(newTitle){
   this.setState({
    titlePrimary:newTitle,
    titleWarning:"click me"
   })
 }

 changeTitleWarning(newTitle){
  this.setState({
    titleWarning:newTitle,
    titlePrimary:"click me"


  })
 }

  render() {
    return (
      <div className="App">
      <Parent 
      changeTitlePrimary = {this.changeTitlePrimary.bind(this,"isPrimary")}
      changeTitleWarning = {this.changeTitleWarning.bind(this,"isWarning")}
      titlePrimary = {this.state.titlePrimary}
      titleWarning = {this.state.titleWarning}
      />

     
      </div>
    );
  }
}

export default App;
