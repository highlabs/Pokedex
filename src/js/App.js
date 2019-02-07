import React, { Component } from 'react';
import '../css/App.css';
import PokeDex from './components/PokeDex';

class App extends Component {

  render() {
    return (
      <div className="App">
          <PokeDex />
      </div>
    );
  }
}

export default App;
