import React, { Component } from 'react';
import { Stage } from 'react-pixi-fiber';
import RotatingBunny from './RotatingBunny';

class Game extends Component {
    
    render() {
        return (
            <Stage {...this.props}>
                <RotatingBunny x={this.props.width / 2} y={this.props.height / 2} width={this.props.width} height={this.props.height}/>
            </Stage>
        );
    }

}

export default Game;
