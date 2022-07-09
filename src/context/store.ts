import { IState } from "./types";
const initialState: { myPokemon: IState[] } = {
  myPokemon: JSON.parse(localStorage.getItem("myPokemon") || "[]"),
};

export default initialState;
