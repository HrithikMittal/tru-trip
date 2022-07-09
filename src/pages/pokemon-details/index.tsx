import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPokemonDetails } from "../../utils/apis";
import { IMAGE_URL } from "../../config";
import { getStyles } from "./style";
import { IPokemon } from "@src/utils/types";

const PokemonDetails = () => {
  const params = useParams();
  const classes = getStyles();

  const { data } = useQuery(`pokemon-${params.name}`, async () => {
    const pokemon = await getPokemonDetails(params.name || "");
    return pokemon;
  });

  return (
    <div className={classes.container}>
      <div className={classes.title}>Pokemon Details</div>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <img
            src={`${IMAGE_URL}${params.id}.png`}
            width="100px"
            height="100px"
            alt={params.name}
          />
        </div>
        <div className={classes.name}>
          <div className={classes.pokemonName}> {params.name}</div>
          <div className={classes.chip}>height:{data?.height}</div>
        </div>
      </div>
      <div className={classes.bottomCard}>
        <div className={classes.bottomCardTitle}>Pokemon Info</div>
        <div className={classes.info}>
          <div className={classes.moves}>
            <div className={classes.moveTitle}>Moves</div>
            <div className={classes.moveList}>
              {data?.moves.map((move: { move: IPokemon }, index: number) => {
                return <div key={index}>{move.move.name} </div>;
              })}
            </div>
          </div>
          <div className={classes.moves}>
            <div className={classes.moveTitle}>Types</div>
            <div className={classes.moveList}>
              {data?.types.map((type: { type: IPokemon }, index: number) => {
                return <div key={index}>{type.type.name} </div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button>Capture {params.name}</button>
      </div>
    </div>
  );
};

export default PokemonDetails;
