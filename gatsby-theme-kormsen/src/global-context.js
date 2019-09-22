import React, { createContext, useReducer } from 'react';

const defaultState = {
  sidebarIsOpen: true,
  menuIsOpen: false,
  currentPage: null,
  showCanvas: true,
};

const actions = (dispatch) => {
  const toggleSidebar = (invalidate) => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    })
  };

  const toggleMenu = (invalidate) => {
    dispatch({
      type: 'TOGGLE_MENU',
    })
  };

  return {
    toggleSidebar,
    toggleMenu
  };
};

const {Provider, Consumer} = createContext(defaultState);

const GlobalContextProvider = ({ children }) => {
  const reducer = (globalState, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return { ...globalState, sidebarIsOpen: !globalState.sidebarIsOpen };
      case 'TOGGLE_MENU':
        return { ...globalState, menuIsOpen: !globalState.menuIsOpen };
      default:
        return globalState
    }
  }

  const [globalState, dispatch] = useReducer(reducer, defaultState);

  const value = {
    globalState: {
      ...globalState
    }, actions: actions(dispatch)
  };

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

export {Consumer as default, GlobalContextProvider};


