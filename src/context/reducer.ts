import actions from "./action";
import { IAction, IState } from "./types";

const reducer = (state: { myPokemon: IState[] }, action: IAction) => {
  switch (action.type) {
    case actions.ADD_POKEMON:
      const pokemonStorage: IState[] = JSON.parse(
        localStorage.getItem("myPokemon") || "[]"
      );
      pokemonStorage.push(action.payload.myPokemon[0]);
      localStorage.setItem("myPokemon", JSON.stringify(pokemonStorage));
      console.log("pokemonStorage", pokemonStorage);
      return {
        ...state,
        myPokemon: [...state.myPokemon, action.payload.myPokemon[0]],
      };
    case actions.REMOVE_POKEMON:
      const pokemonStorage1: IState[] = JSON.parse(
        localStorage.getItem("myPokemon") || "[]"
      );
      const ind = pokemonStorage1.findIndex((pokemon: IState) => {
        return pokemon.id === action.payload.myPokemon[0].id;
      });
      pokemonStorage1.splice(ind, 1);
      localStorage.setItem("myPokemon", JSON.stringify(pokemonStorage1));

      return {
        ...state,
        myPokemon: state.myPokemon.filter(
          (pokemon) => pokemon.id !== action.payload.myPokemon[0].id
        ),
      };
    default:
      throw new Error();
  }
};

export default reducer;
