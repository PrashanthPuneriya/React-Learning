import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

// # Class Based Components
class App extends Component {
  // STATES ------------------------------------------------------------------------
  state = {
    names: ['Prashanth', 'Abhishek'],
    showPerson: false
  }
  
  // FUNCTIONS ------------------------------------------------------------------------
  nickNameHandler = (nickname) => {
    this.setState({
      names: [nickname, 'Abhishek']
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      names: [event.target.value, 'Abhishek']
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
        <Person name={this.state.names[0]} click={() => this.nickNameHandler('Vishal(refPass)')} changed={this.changeNameHandler} />
        <button onClick={this.nickNameHandler.bind(this, 'Vishal(buttonPass)')}>Show Nick NAME</button>
        <Person name={this.state.names[1]}>----</Person>
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

/*
# FUNCTIONAL BASED COMPONENTS
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  # WE CAN DEFINE UNLIMITED 'useState()'
  const [currPersonState, setPersonState] = useState(
    {
      name: ['Prashanth', 'Abhishek']
    }
  )
  let changeNameHandler = () => {
    // Don't mutate state directly
    setPersonState({
      name: []
    })
  }
  return (
    <div className="App">
      <h1>List of Persons:-</h1>
      <button onClick={changeNameHandler}>Switch NAME</button>
      <Person name={currPersonState.name[0]} />
      <Person name={currPersonState.name[1]}>Brother</Person>
    </div>
  );
}
export default app;
*/