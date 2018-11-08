import React, {Component , PureComponent} from 'react';
import './App.css';


const Temp  =(props)=>{
    console.log("render Temp")

  return (<div><h1>{props.val}</h1></div>);
}

class App extends PureComponent {
   state = {
       val: 1
   }
//setInterval(()=>{ alert("Hello"); }, 3000);
   componentDidMount(){
     setInterval(()=>{
         this.setState(()=>{
             return {val:1}
         })
     },5000)
   }

//    shouldComponentUpdate(nextProps,nextState){
//        console.log("nextState",nextState)
//        console.log("current state" , this.state)
//        return(this.state.val === nextState.val? false:true);
//    }
   
    render() {
     
console.log("render App")
        return (
            <div className="App">
                <br/><br/><br/><br/><br/><br/><br/>
              <Temp val = {this.state.val}/>
             
            </div>
      )
       
           
        };
    }


export default App;
