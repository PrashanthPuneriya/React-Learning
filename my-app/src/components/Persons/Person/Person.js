import React from 'react';
import './Person.css';

// In real-time this file is used to create a card for each person
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