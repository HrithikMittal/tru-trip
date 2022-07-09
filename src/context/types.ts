export enum ActionType {
  ADD_POKEMON = "ADD_POKEMON",
  REMOVE_POKEMON = "REMOVE_POKEMON",
}

export interface IState {
  name: string;
  id: string;
  nickName: string;
  url: string;
  isRemove?: boolean;
}

export interface IAction {
  type: ActionType;
  payload: { myPokemon: IState[] };
}

export interface IContext {
  myPokemons: IState[];
  addPokemon: (value: IState) => void;
  removePokemon: (value: IState) => void;
}
