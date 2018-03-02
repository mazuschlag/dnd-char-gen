import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome.jsx';
import CharacterGenerator from './components/CharacterGenerator/CharacterGenerator';


class App extends Component {
  render() {
    return (
      <CharacterGenerator />
    );
  }
}

export default App;
