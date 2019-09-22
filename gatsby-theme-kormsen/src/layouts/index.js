// import DevPlayground from './dev-playground';
// import DesignSystem from './design-system';
// import Sight from './sight';
// import Sound from './sound';
// import Thought from './thought';
import React, {useMemo, useRef, useCallback, useEffect, useState} from 'react'
import {Box, Grid} from '../components/atoms';
import Canvas from '../components/three.js';
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Sidebar from '../components/sidebar';
import globalStyles from 'emotion-normalize';
import themedCss from '@styled-system/css';
import {GlobalContextProvider} from "../global-context";
import {useSpring, animated, useTransition} from 'react-spring';


const AppContainer = styled(Grid)`
  grid-template-columns: [sidebar] 320px [content] 1fr;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ThreeCanvas = styled(Canvas)`
  
`;

const GridCtn = styled(Grid)`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 4;
  align-items: center;
  height: 100%;
`;

const CanvasContainer = styled(Box)`
  position: fixed;
  top:0;
  left: 0;
  right:0;
  bottom: 0;
  background-color: red;
`;

const Overlay = styled(animated(Box))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;


const Content = styled(Box)`
  grid-column: content;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 96px;
  z-index: 1;
`;

const themes = [
]

export default ({children, layout, match, location, ...props}) => {
  // const fullwidth = props.location.pathname === '/'
  // const [ menu, setMenu ] = useState(false)
  // const nav = useRef(null)
  const canvas = useMemo(() => <ThreeCanvas />, []);
  const [overlayColor, setOverlayColor] = useState('rgba(10, 100, 230, .6)');


  const getOverlayColor = (path) => {
    switch (path) {
      default:
          case '/':
            return 'rgba(10, 100, 230, .6)';
          case '/sights':
            return 'rgba(140, 60, 20, .6)';
    }
  };

  const overlayProps = useSpring({
    to: async (next, cancel) => {
      // await next({backgroundColor: 'rgba(10, 100, 230, .6)'})
      await next({backgroundColor: 'rgba(30, 60, 230, .6)'})
    },
    from: {opacity: .6, backgroundColor: 'rgba(10, 100, 230, .6)' }
  })

  return (
    <GlobalContextProvider>
      <Global styles={css`
        ${globalStyles}
        html {min-height: 100%;}
        body {min-height: 100vh;}
        html,
        body {
          padding: 0;
          margin: 0;
          background: white;
          
          font-family: Helvetica, Arial, sans-serif;
        }
      `}/>
      <AppContainer title="Kormsen" subtext="Shag puss">
        <CanvasContainer>
          {canvas}
          <Overlay style={overlayProps} />
        </CanvasContainer>
        <Sidebar />
        <Content>
          <GridCtn>
            {children}
          </GridCtn>
        </Content>
      </AppContainer>
    </GlobalContextProvider>
  )
}
