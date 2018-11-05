import React, { Component } from 'react';
import './App.css';
import User from './users/User';
import UniqueId from 'react-html-id';



let max = 10000;
  let min = 1
  let randomId = Math.floor(Math.random()*(max-min+1))+min;


class App extends Component {
  //install react-html-id

  constructor(){
    super();
     UniqueId.enableUniqueIds(this);
    this.state = {

      users: [

          {id:this.nextUniqueId(),name:'John',age:25},
          { id:this.nextUniqueId(),name:'Peter',age:27},
          {id:this.nextUniqueId(),name:'Kim',age:23}

     ],
      title:"Users list",  
} 
console.log(this.state) 
  }
 

  

  deleteUser = (index , e)=>{
    console.log('delete user '+ this.state.users[index].name);
    const users = this.state.users;
    const afterDelete = users.filter((user,i) => index!==i);
    console.log(afterDelete);
    this.setState({
      users:afterDelete,
    });
  }

  changeUserName = (id,e)=>{
    const index = this.state.users.findIndex((user)=>{
     return user.id ===id;
    });
         console.log('index' , index)

    const user  = Object.assign({},this.state.users[index]);
        console.log('user',user)
    user.name = e.target.value;
         console.log('user.name',user.name)
    const users  = Object.assign([],this.state.users);
         console.log('users',users)
    users[index] = user;
    this.setState({users:users})


    
  }
  

  render() {
   
    if(this.state.users.length===0){
      return (
      <div className="App">
      <h1>No user</h1>
      <br/>
      </div>
            )
    }
    else{
    return (
      <div className="App">
      
        <h1>{this.state.title}</h1>
        <br/>
      
        <ul>
          {
            this.state.users.map((user,index)=>{
              return (
                <User 
                key = {user.id} 
                age={user.age}
                 delEvent = {this.deleteUser.bind(this,index)}
                 changeEvent = {this.changeUserName.bind(this,user.id)}
 
                >
                {user.name}
                </User>
              )
            })
            }
          
         
        </ul>
      
          {console.log(this.state.users)}
     
      </div>
    )};
  }
}

export default App;
