import React from 'react';

const Child = (props)=>{
    return(
        <div>
            <br/>
            <button className="btn btn-primary" onClick={props.changeTitlePrimary}>{props.titlePrimary}</button>
            <button className="btn btn-warning" onClick={props.changeTitleWarning}>{props.titleWarning}</button>

        </div>
    )
}

export default Child;