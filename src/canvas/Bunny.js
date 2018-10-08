import React from 'react';
import {Sprite} from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import ben from '../img/ben.jpg';

const bunny = "https://i.imgur.com/IaUrttj.png";
const centerAnchor = new PIXI.Point(0.5, 0.5);

function Bunny(props) {
    return (
        <Sprite
            anchor={centerAnchor}
            texture={PIXI.Texture.fromImage(ben)}
            {...props}
        />
    );
}

export default Bunny;