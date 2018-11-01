import React from 'react';

const User = (props)=>{
    let age = props.age?props.age:'NA';
    if(props.children){
        return(
            <li key={new Date()}>
               <span>Name : {props.children}  |  age : {age} </span> 
               <button onClick={props.delete} className ="btn btn-primary">Delete</button>
            </li>
        )
    }else{
        return(
            <div>
              Invalid User
            </div>
        )
    }
    
}

export default User;