import React , {Component} from 'react';
import User from './User';

class Users extends Component{
    state = {
        users : [
            {"name":"John","age":45},
            {"name":"Peter","age":23},
            {"name":"Sam","age":56}
        ],
        Title:"Users List",
        message:''
    };

    
//Obj.assign method to delete user

    // deleteUser = (index)=>{
    //     const objUsers = Object.assign([],this.state.users);
    //     objUsers.splice(index,1);
    //     if(!objUsers.length){
    //         this.setState({Title:'Users List is empty'})
    //     }
    //     this.setState({users : objUsers});

    // }

     //try array.filter method 
     
     deleteUser = (index)=>{
        const {users} = this.state;
        
        this.setState({
        users: users.filter((user,i)=>{
            if(users.length==1){
            this.setState({Title:'Users List is empty'})
                     }
            console.log("Deleted" , index) 
        return i!==index;

        
     })
     })
     }


    render(){
        return(
            <div>
                <br/>
                <h1>{this.state.Title}</h1>
                <ul>
             {
                 this.state.users.map((user,index)=>{
                     return <User delete={this.deleteUser.bind(this,index)} age={user.age}>{user.name}</User>
                 })
             }
             </ul> 
             <div>{this.state.message}</div>
            </div>
        )
    }
}

export default Users;