import { h } from "preact";

import { createContext } from "preact";
import { useContext, useReducer } from "preact/hooks";

export enum Actions {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

type Action = { type: Actions };
type initialStateType = {
  state: {
    count?: number;
  };
  dispatch: (action: Action) => void;
};

const initialState: initialStateType = {
  state: {
    count: 0,
  },
  dispatch: (action: Action) => {},
};

const style = "font-weight: bold; ";

const GlobalState = createContext(initialState);

const globalReducer = (state, action) => {
  let newState = {};

  switch (action.type) {
    case Actions.INCREMENT:
      newState = { count: state.count + 1 };
      break;
    case Actions.DECREMENT:
      newState = { count: state.count - 1 };

      break;
  }

  console.group("ACTION:", String(action.type).toUpperCase());
  console.info("%c  prevState: ", style, state, "\n");
  console.info("%c  state: ", style, newState, "\n");
  console.groupEnd();

  return newState;
};

const GobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState.state);
  const value = { state, dispatch };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

const useGlobalState = () => {
  const context = useContext(GlobalState);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { GobalStateProvider, useGlobalState };
