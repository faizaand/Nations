import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bunny from './Bunny';

class RotatingBunny extends Component {
    state = {
        rotation: 0,
        x: this.props.x,
        y: this.props.y,
        xDir: 1,
        yDir: 1
    };

    componentDidMount() {
        this.context.app.ticker.add(this.animate);
    }

    componentWillUnmount() {
        this.context.app.ticker.remove(this.animate);
    }

    animate = delta => {
        var xDir = this.state.xDir;
        var yDir = this.state.yDir;

        console.log(this.props.width, this.props.height);

        if(this.state.x >= this.props.width) xDir = -1 - (Math.random());
        if(this.state.x <= 0) xDir = 1 + (Math.random());
        if(this.state.y >= this.props.height) yDir = -1;
        if(this.state.y <= 0) yDir = 1;

        let x = this.state.x + xDir;
        let y = this.state.y + yDir;

        // console.log(x);

        this.setState(state => ({
            ...state,
            rotation: this.state.rotation + 0.1 * delta,
            x: x,
            y: y,
            xDir: xDir,
            yDir: yDir
        }));
    };

    render() {
        return <Bunny x={this.state.x} y={this.state.y} rotation={this.state.rotation}/>
    }

}

RotatingBunny.contextTypes = {
    app: PropTypes.object
};

export default RotatingBunny;
