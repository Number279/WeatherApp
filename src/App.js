import React from 'react';
import logo from './Logo/logo';
import './App.css';
import Forecast from "./Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1> Group Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by WeatherTeamSix
      </footer>
    </div>
  );
}

export default App;
