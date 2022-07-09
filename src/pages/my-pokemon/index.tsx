import React, { useContext } from "react";
import PokemonContext from "../../ context/context";

const MyPokemon = () => {
  const { myPokemons } = useContext(PokemonContext);

  console.log("myPokemons", myPokemons);

  return <div>MyPoekomon</div>;
};

export default MyPokemon;
