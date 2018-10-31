import React, { Component } from 'react';
import './App.css';
import Child from './components/parentToChild/child';
import Parent from './components/parentToChild/parent'





class App extends Component {
 state = {
   title: "Awesome button"
 }

 changeTitle=(newTitle)=>{
this.setState({
  title:newTitle
})
 }

 changeTheWorldEvent=(newTitle)=>{
   this.setState({
    title :newTitle

   })
 }

  render() {
    return (
      <div className="App">
      <Parent changeTheWorldEvent ={this.changeTheWorldEvent.bind(this,"changeTheWorldEvent")}
              keepTheWorldAsItEvent ={this.changeTheWorldEvent.bind(this,"keepTheWorldAsItEvent")}
              title ={this.state.title}/>

     
      </div>
    );
  }
}

export default App;
