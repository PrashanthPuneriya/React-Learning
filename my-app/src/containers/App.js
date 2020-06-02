import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';

// # Class Based Components
class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Prashanth'},
      {id: '2', name: 'Abhishek'}
    ],
    showPerson: false,
  }
  
  // FUNCTIONS ------------------------------------------------------------------------

  changeNameHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( (person) => person.id === id );
    const person = { ...this.state.persons[personIndex] }; // object
    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = ( personIndex ) => {
    // DON'T mutate the original data
    // Below persons is a reference to the original data
    // const persons = this.state.persons;
    const persons = [...this.state.persons] // Spread ... helps to make a copy of the data
    persons.splice(personIndex, 1);
    this.setState({ 
      persons: persons 
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ 
      showPerson: !doesShow 
    })
  }

  // RENDERER ------------------------------------------------------------------------
  render() {
    const styleBtn = {
      backgroundColor: 'green',
      color: 'white',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.changeNameHandler} />
      );
      styleBtn.backgroundColor = 'red';
    };

    return (
      <div className="App">
          <Cockpit clicked={this.togglePersonHandler}/>
          { persons }
      </div>
    );
  }
}

export default App;