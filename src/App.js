import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import SecretWord from './secretword/SecretWord'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <Title content= "HangMan Game" />
          <SecretWord secretword="oliver" />

      </div>
    );
  }
}

export default App;
