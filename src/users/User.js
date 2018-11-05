import React from 'react';

const User  = (props)=>{
    return (
    <li>
        My name is {props.children} and i'm {props.age} years old
        <input type="text" onChange = {props.changeEvent} value = {props.children}/>
        <button onClick={props.delEvent}
         className = "btn btn-primary">Delete {props.children}
         </button>
   </li>
    )
}

export default User;