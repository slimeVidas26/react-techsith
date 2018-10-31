import React from 'react';

const User = (props)=>{
    let age = props.age?props.age:'NA';
    if(props.children){
        return(
            <div>
                Name : {props.children}  |  age : {age} 
            </div>
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