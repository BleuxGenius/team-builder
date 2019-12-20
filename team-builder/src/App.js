import React, { useState } from 'react';
import logo from './logo.svg';
import Team from './Components/Team';
import './App.css';

function App() {

  // array of finalized members 
    const [teammates, SetTeammates] = useState([]);

    // membber based on what is entered in the fields 
    const [teammate, SetTeammate] = useState({ name: "", email: "", role:""});

    const handleChange = event => {
      SetTeammate({...teammate, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
      event.preventDefault();
      teammates.push(teammate)
      SetTeammate({name: "", email: "", role:""});
    };

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          name:
          <input
          type="text"
          name="name"
          value={teammate.name}
          onChange ={event => handleChange(event)} />
        </label>
        <label>
          email:
          <input 
          type="text"
          name="email"
          value={teammate.email}
          onChange={event => handleChange(event)} />
        </label>
        <label>
          role:
          <input
          type="text"
          name="role"
          value={teammate.role}
          onChange={event => handleChange(event)} />
        </label>
        <button>Submit!</button>
      </form>

       <Team teammates={teammates}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
