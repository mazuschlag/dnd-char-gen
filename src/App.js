import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome.jsx'
import TextComponent from './components/TextComponent/TextComponent'


class App extends Component {
  render() {
    return (
      <TextComponent />
    );
  }
}

export default App;
