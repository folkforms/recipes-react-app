/*
Wrap your app in the GlobalStateProvider:

    import { GlobalStateProvider } from './state/globalState';

    const App = () => {
      return (
        <GlobalStateProvider>
          <Options />
          <List />
        </GlobalStateProvider>
      );
    }

Any component that needs to access the global state can use:

    import { GlobalStateContext } from "../state/globalState";

    const [ state, dispatch ] = React.useContext(GlobalStateContext);

    // Will trigger this event in the reducer
    dispatch({ type: "update_foo", payload: { newFooValue: 42 } });

Also it's useful to place the actions in a central location:

    const actions = {
      updateFoo: (e, state, dispatch, value) => {
        e.preventDefault();
        dispatch({ type: "update_foo", payload: value })
      },
      ...
    }
    export default actions;

Constants are also useful for types and similar items:

    const UPDATE_FOO = "UPDATE_FOO";
    export {
      UPDATE_FOO
    };
*/

import React from 'react';
import * as ActionTypes from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    // case ActionTypes.ADD_TO_SELECTION:
    //   const kitToAdd = action.payload;
    //   const newSelectedKits1 = state.selectedKits.filter(item => item !== kitToAdd);
    //   newSelectedKits1.push(kitToAdd);
    //   const newCost1 = getCostOfKits(newSelectedKits1);
    //   return {
    //     ...state,
    //     selectedKits: newSelectedKits1,
    //     cost: newCost1,
    //   }
    // case ActionTypes.REMOVE_FROM_SELECTION:
    //   const kitToRemove = action.payload;
    //   const newSelectedKits2 = state.selectedKits.filter(item => item !== kitToRemove);
    //   const newCost2 = getCostOfKits(newSelectedKits2);
    //   return {
    //     ...state,
    //     selectedKits: newSelectedKits2,
    //     cost: newCost2,
    //   }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export const initialState = {
  recipes,
  synonyms
}

export const GlobalStateContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </GlobalStateContext.Provider>
  )
}
