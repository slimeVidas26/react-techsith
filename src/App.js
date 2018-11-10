import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router , Link , NavLink , Redirect , Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User =(params)=>{
return (<h1>Welcome user {params.username}</h1>)
}

class App extends Component {

    state = {
        loggedIn:false
    }

   

    handleClick = ()=>{
        this.setState(
                    prevState=>(
                        {loggedIn: ! prevState.loggedIn}
                            )
                     )
    }

    render() {
        return (
            <Router>
              <div className="App">
<ul>
    <li><NavLink to = "/" exact activeStyle={{color:'green'}}>Home</NavLink></li>
    <li><NavLink to = "/about" exact activeStyle={{color:'green'}}>About</NavLink></li>
    <li><NavLink to = "/user/john" exact activeStyle={{color:'green'}}>User John</NavLink></li>
    <li><NavLink to = "/user/peter" exact activeStyle={{color:'green'}}>User Peter</NavLink></li>
</ul>

<Prompt
when = {!this.state.loggedIn}
message = {
    (location)=>{
        return location.pathname.startsWith('/user') ? 'Are you sure ?':true
    }
}
/>

<input type="button" className ={this.state.loggedIn ?"btn btn-primary" :"btn btn-danger" } value={this.state.loggedIn ?"Click to log out" :"Click to log in" }  onClick={this.handleClick.bind(this)}/>


               
                 
              <Route path ="/" exact strict render={
                    ()=>{
                        return (<h1>Welcome home</h1>)
                    } 
              }/>

               <Route path ="/about" exact strict render={
                    ()=>{
                        return (<h1>Welcome about</h1>)
                    } 
              }/>
              <Route path ="/user/:username" exact strict render={
                  ({match})=>(
                  this.state.loggedIn ? (<User username = {match.params.username}/>) : (<Redirect to="/"/>)
                             )
              }
              />

              </div>
            </Router>
        )

    };
}

export default App;
