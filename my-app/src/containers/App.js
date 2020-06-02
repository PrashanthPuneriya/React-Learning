import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person.js';

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
      <div>
        {
          this.state.persons.map((person, index) => {
              return (
                <Person 
                  key={person.id}
                  name={person.name} 
                  clicked={() => this.deletePersonHandler(index)}
                  changed={(event) => this.changeNameHandler(event, person.id)} />
              );
          })
        }
      </div>
      );
      styleBtn.backgroundColor = 'red';
    };

    return (
      <div className="App">
        <h1>Persons Manager:-</h1>
        <button style={styleBtn} onClick={this.togglePersonHandler}>Toggle Viewer</button>
          { persons }
      </div>
    );
  }
}

export default App;