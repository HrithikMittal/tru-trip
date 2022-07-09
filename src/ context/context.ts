import { createContext } from "react";
import { IContext } from "./types";

const PokemonContext = createContext<IContext>({} as IContext);

export default PokemonContext;
