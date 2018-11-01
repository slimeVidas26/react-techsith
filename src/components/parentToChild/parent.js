import React from 'react';
import Child from './child';

function Parent(props){
    return(
     <Child {...props}/>
    )
}export default Parent;