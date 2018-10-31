import React , {Component} from 'react';
import User from './User';
//CLASS



class Users extends Component{
    state = {
        Users : [
            {"name":"John","age":45},
            {"name":"Peter","age":23},
            {"name":"Sam","age":56}
        ],
        Title:"Users List"
    };

    makeMeYounger = ()=>{
       const youngerUsers = this.state.Users.map((user)=>{
            //const youngerUser = user;
            user.age-=10;
            if(user.age<0){
                user.age = 0;
            }
            return user;
       });
       this.setState({
        youngerUsers
       })
    }
   
    render(){
        return(
            <div>
                <button onClick = {this.makeMeYounger}>Make me 10 years old younger</button>
                <br/>
                <h1>{this.state.Title}</h1>
             {
                 this.state.Users.map((user)=>{
                     return <User age={user.age}>{user.name}</User>
                 })
             }
            
              
              
            </div>
        )
    }
}

export default Users;