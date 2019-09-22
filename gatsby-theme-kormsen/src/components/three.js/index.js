import React, { useRef, useEffect, useState } from "react";
import { Canvas, useThree, useRender, extend } from "react-three-fiber";
import Stars from "./scenes/stars";
import {Box} from '../atoms';
import ModelViewer from "./model-viewer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styled from '@emotion/styled';
import themedCss from '@styled-system/css';
import dancingGirl from './scenes/dancing-girl/scene.gltf';
import runningMan from './scenes/running-man/running-man.gltf';
import breakpoint from '../../utils/helpers/breakpoints';
import useEventListener from '../../utils/hooks/use-event-listener';


extend({ OrbitControls });

const CanvasContainer = styled(Box)`
  height: 100%;
  width: 100%;
`;

function CameraControls(props) {
  const controls = useRef();
  const { camera } = useThree();
    

  useRender(() => controls.current && controls.current.update(), false);

  return <orbitControls ref={controls} args={[camera]} {...props} />;
}


const ThreeCanvas = ({ src, type, aspect, ...rest }) => {
  const [state, setState] = useState({device: breakpoint()});
  const modelRef = useRef(null);


  useEventListener('resize', () => {
    setState({...state, device: breakpoint()})
  })

  useEffect(() => {
    document.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
    return () => {
      document.removeEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
        },
        { passive: false }
      );
    };
  }, []);

  return (
    <ModelViewer src={runningMan} type="gltf">
      {({
        model,
        modelCenter,
        modelProgress,
        modelError,
        animations,
        animationIndex,
        playing,
        loopMode,
        timeScale,
        animationProgress,
        play = true,
        pause,
        seek,
        setLoopMode,
        setTimeScale,
        setAnimationIndex,
      }) => (
          <CanvasContainer {...rest}>
            <Canvas
              camera={{ position: [100, 0, 100] }}
              {...rest}
            >
              <CameraControls
                enableDamping
                minDistance={140}
                maxDistance={400}
                dampingFactor={0.3}
                minPolarAngle={0.6}
                target={[60, 10, 0]}
                lookAt={modelRef.current && modelRef.current.position}
                maxPolarAngle={Math.PI / 2.25}
              />
              <ambientLight color="lightblue" />
              <pointLight color="white" intensity={4} position={[50, 300, 50]} />
              <Stars />
              {model && (
                <primitive
                  ref={modelRef}
                  object={model.scene || model}
                  position={[0, -80, 0]}
                  scale={[100,100,100]}
                />
              )}
            </Canvas>
          </CanvasContainer>
        )}
    </ModelViewer>
  );
};

export default ThreeCanvas;
