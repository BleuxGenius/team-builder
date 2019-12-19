import React, {useState } from 'react';
import logo from './logo.svg';
import TeamForm from './Components/TeamForm';
import Team from './Components/Team';
import PretendData from './Components/PretendData';
import './App.css';

function App() {

    const [defaultTeam, setDefaultTeam] = useState(PretendData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <Team teamList={defaultTeam}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
