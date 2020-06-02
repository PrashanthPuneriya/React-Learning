import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

// # Class Based Components
class App extends Component {
  // STATES ------------------------------------------------------------------------
  state = {
    persons: [
      {name: 'Prashanth'},
      {name: 'Abhishek'},
    ],
    showPerson: false
  }
  
  // FUNCTIONS ------------------------------------------------------------------------
  nickNameHandler = (nickname) => {
    this.setState({
      persons: [
        {name: nickname},
        {name: 'Abhishek'},
      ],
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value},
        {name: 'Abhishek'},
      ],
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
        <Person name={this.state.persons[0].name} click={() => this.nickNameHandler('Vishal(refPass)')} changed={this.changeNameHandler} />
        <button onClick={this.nickNameHandler.bind(this, 'Vishal(buttonPass)')}>Show Nick NAME</button>
        <Person name={this.state.persons[1].name}>----</Person>
      </div>);

      styleBtn.backgroundColor = 'red';
    };

    // RETURN ------------------------------------------------------------------------
    return (
      <div className="App">
        <h1>List of Persons:-</h1>
        <button style={styleBtn} onClick={this.togglePersonHandler} >Toggle Viewer</button>
          { persons }
      </div>
    );
  }
}

export default App;