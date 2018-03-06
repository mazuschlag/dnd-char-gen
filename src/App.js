import React, { Component } from 'react';
import './App.css';
import CharacterGenerator from './components/CharacterGenerator/CharacterGenerator';
import AbilityScoreComponent from './components/AbilityScoreComponent/AbilityScoreComponent';

class App extends Component {
  render() {
    return (
      <CharacterGenerator />
    );
  }
}

export default App;
