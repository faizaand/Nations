import React, { Component } from 'react';
import Game from './canvas/Game';
import './App.css';

const height = 512;
const width = 512;
const options = {
  backgroundColor: 0x1099bb
};

class App extends Component {
  render() {
    return (
      <Game options={options} width={width} height={height}></Game>
    );
  }
}

export default App;
