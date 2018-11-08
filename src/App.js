import React, {Component} from 'react';
import './App.css';
import Child from './child';


class App extends Component {

    constructor(){
        super();
        this.state = {
            name :"John"
        }
        console.log("constructor");
    }

    componentWillMount(){
        //only runs once
        if(window.innerWidth > 500){
            this.setState({innerWidth:window.innerWidth})
        }
        console.log("componentWillMount");

    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
   
    }

    shouldComponentUpdate(nextProps , nextState){
        console.log("shouldComponentUpdate");

        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
  
    }

    componentDidUpdate(prevProps , prevState){
        console.log(" componentDidUpdate");
    }

    componentWillUnmount(){
        console.log(" componentWillUnmount");
   
    }

    unmountChild(){
        this.setState({
            name:"Robert"
        })
    }

    changeState = ()=>{
        this.setState({
            name:"Peter"
        })
    }
    render() {
       console.log("render")
       if(this.state.name=== "Robert"){
           return(
               <div/>
           )
       }
       else{

        return (
            <div className="App">
                name:{this.state.name} <br/>
                innerWidth:{this.state.innerWidth}
                <Child name = {this.state.name}/>
                <button onClick={this.changeState.bind(this)}>ChangeState</button>
                <button onClick={this.unmountChild.bind(this)}>unmountChild</button>

             
            </div>
      )
       }
           
        };
    }


export default App;
