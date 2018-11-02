import React , {Component} from 'react';
import User from './User';
import UniqueId from 'react-html-id';

class Users extends Component{

    constructor(){
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            users : [
                {"id":this.nextUniqueId() , "name":"John","age":45},
                {"id":this.nextUniqueId() ,"name":"Peter","age":23},
                {"id":this.nextUniqueId() ,"name":"Sam","age":56}
            ],
            Title:"Users List",
            message:''
        };
        console.log(this.state)
    }
   

    
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
            
        return i!==index;   
     })
     })

     if(users.length===1){
        this.setState({Title:'Users List is empty'})
        //console.log("Deleted" , index) 
                 }
       
     }

     changeUserName = (id,e)=>{
         const index = this.state.users.findIndex((user)=>{
            return user.id===id;
         })
         const user = Object.assign({}, this.state.users[index]);
         user.name = e.target.value;

         const users = Object.assign([],this.state.users);
         users[index] = user;
         this.setState({users:users});
           
         
     }


    render(){
        return(
            <div>
                <br/>
                <h1>{this.state.Title}</h1>
                <ul>
             {
                 this.state.users.map((user,index)=>{
                return <User
                      delete={this.deleteUser.bind(this,index)}
                      changeEvent = {this.changeUserName.bind(this,user.id)}
                       age={user.age}>
                       {user.name}
                      
                       </User>
                 })
             }
             </ul> 
             <div>{this.state.message}</div>
            </div>
        )
    }
}

export default Users;