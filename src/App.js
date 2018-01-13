import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import SecretWord from './secretword/SecretWord'

const secrets = ["pony", "marcapasos", "pedo", "oliver"]
var randSecret = secrets[Math.floor(Math.random() * secrets.length)];

class App extends Component {
  render() {
    return (
      <div className="App">

          <Title content= "HangMan Game" />
          <SecretWord secretword={ randSecret } />

      </div>
    );
  }
}

export default App;
