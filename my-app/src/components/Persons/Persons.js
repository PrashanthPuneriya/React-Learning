import React from 'react';
import Person from './Person/Person.js';

// In real-time this file is used to get all the users data
const persons = (props) => props.persons.map((person, index) => {
    return (
      <Person 
        key={person.id}
        name={person.name} 
        clicked={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)} />
    );
});

export default persons;