import React from 'react';

const User  = (props)=>{
    return (
    <li>
        <span>My name is <span className="bold">{props.children}</span > and i'm <span className = "bold">{props.age}</span> years old</span>
        <input type="text" onChange = {props.changeEvent} value = {props.children}/>
        <button onClick={props.delEvent}
         className = "btn btn-primary">Delete {props.children}
         </button>
   </li>
    )
}

export default User;