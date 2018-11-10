import React, { Component } from 'react';
import Game from './canvas/Game';
import { Row, Col } from 'react-flexbox-grid';
import { SizeMe } from 'react-sizeme';
import './App.css';

const boardHeight = 512;
const boardWidth = 512;
const options = {
  backgroundColor: 0x1099bb
};

class App extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={7}>
          <SizeMe>
            {({ size }) => <Game options={options} width={size.width} height={(size.width * 3)/5}></Game> }
          </SizeMe>
        </Col>
        <Col xs={12} md={5}>
          {/* yes yes this should be a component, burn me at the stake */}
          <div class="panel">
            <h1>Inspector: <em>Faizaanistan</em></h1>
            <p>Population: <b>Nothing</b></p>
            <p>National Anthem: <b>Ey Iran</b></p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default App;
