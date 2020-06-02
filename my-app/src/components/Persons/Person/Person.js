import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>Name: {props.name}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
            <button onClick={props.clicked}>Delete this Person</button>
        </div>
    );
}

export default person;