import React, { useContext } from "react";
import PokemonContext from "../../context/context";
import SinglePokemon from "../../components/single-pokemon";
import { getStyles } from "../pokemon/style";
import { IState } from "@src/context/types";

const MyPokemon = () => {
  const classes = getStyles();
  const { myPokemons } = useContext(PokemonContext);

  return (
    <div className={classes.container}>
      <div className={classes.title}>My Pokemons</div>
      <div className={classes.list}>
        {myPokemons?.length === 0 ? (
          <div className={classes.empty}>"You don't have any pokemons yet"</div>
        ) : (
          myPokemons?.map((pokemon: IState, index: number) => {
            return <SinglePokemon key={index} {...pokemon} isRemove />;
          })
        )}
      </div>
    </div>
  );
};
export default MyPokemon;
