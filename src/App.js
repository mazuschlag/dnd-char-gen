import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CharacterGenerator from './components/CharacterGenerator/CharacterGenerator';
import AbilityScores from './components/AbilityScoreComponent/AbilityScoreComponent';

class App extends Component {
  render() {
    return (
      <AbilityScores />
    );
  }
}

export default App;
