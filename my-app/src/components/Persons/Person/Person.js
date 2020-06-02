import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Name: {props.name}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
            <p>---{props.children}</p>
            
        </div>
    );
}

export default person;