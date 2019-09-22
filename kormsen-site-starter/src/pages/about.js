import React from 'react'
import {Box, Heading} from 'gatsby-theme-kormsen';
import Sketch from 'react-p5-wrapper'

function sketch (p) {
    let rotation = 0;
  
    p.setup = function () {
      p.createCanvas(600, 400, p.WEBGL);
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };
  
    p.draw = function () {
      p.background(100);
      p.normalMaterial();
      p.noStroke();
      p.push();
      p.rotateY(rotation);
      p.box(100);
      p.pop();
    };
  };

export default function About() {
    return (
        <Box gridColumn="span 12">
            <Heading>Hellod</Heading>
            <Sketch
                sketch={sketch}
            />
        </Box>
    )
}
