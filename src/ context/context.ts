import { createContext } from "react";
import { IContext } from "./types";

const PokemonContext = createContext<IContext | null>(null);

export default PokemonContext;
