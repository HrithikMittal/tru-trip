import React, { useReducer } from "react";

import reducer from "./reducer";
import initialState from "./store";
import actions from "./action";
import PokemonContext from "./context";
import { IState } from "./types";

const PokemonContextProvider = (props: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    myPokemons: state.myPokemon,
    addPokemon: (value: IState) => {
      dispatch({ type: actions.ADD_POKEMON, payload: { myPokemon: [value] } });
    },
    removePokemon: (value: IState) => {
      dispatch({
        type: actions.REMOVE_POKEMON,
        payload: { myPokemon: [value] },
      });
    },
  };

  return (
    <PokemonContext.Provider value={value}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
