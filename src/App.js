import React, {Component} from 'react';
import './App.css';
import Users from './users/Users';
// let max = 10000;   let min = 1   let randomId =
// Math.floor(Math.random()*(max-min+1))+min;

class App extends Component {
    //install react-html-id
    render() {
       
            return (
                <div className="App">
                   <Users/>
                </div>
          )
        };
    }


export default App;
