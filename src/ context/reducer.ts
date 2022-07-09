import actions from "./action";
import { IAction, IState } from "./types";

const reducer = (state: { myPokemon: IState[] }, action: IAction) => {
  switch (action.type) {
    case actions.ADD_POKEMON:
      return state;
    case actions.REMOVE_POKEMON:
      return state;
    default:
      throw new Error();
  }
};

export default reducer;
