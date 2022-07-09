import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPokemonDetails } from "../../utils/apis";
import { IMAGE_URL } from "../../config";
import { getStyles } from "./style";
import { IPokemon } from "@src/utils/types";
import PokemonContext from "../../context/context";
import NicknamePopover from "../../components/nickname-popover";

const PokemonDetails = () => {
  const params = useParams();
  const classes = getStyles();
  const [nickName, setNickName] = useState("");
  const [showPopOver, setShowPopOver] = useState(false);

  const { id, name } = params;
  const { addPokemon, myPokemons } = useContext(PokemonContext);

  const { data } = useQuery(`pokemon-${name}`, async () => {
    const pokemon = await getPokemonDetails(name || "");
    return pokemon;
  });

  const handleSave = () => {
    addPokemon({
      id: id || "",
      name: name || "",
      nickName: nickName,
      url: "",
    });
    setShowPopOver(false);
  };

  const handleCapture = () => {
    setShowPopOver(true);
  };

  return (
    <>
      {showPopOver && (
        <NicknamePopover
          name={name || ""}
          nickName={nickName}
          setNickName={setNickName}
          handleSave={handleSave}
        />
      )}
      <div className={classes.container}>
        <div className={classes.title}>Pokemon Details</div>
        <div className={classes.card}>
          <div className={classes.imgContainer}>
            <img
              src={`${IMAGE_URL}${id}.png`}
              width="100px"
              height="100px"
              alt={name}
            />
          </div>
          <div className={classes.name}>
            <div className={classes.pokemonName}> {name}</div>
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
          <button
            onClick={handleCapture}
            disabled={myPokemons.findIndex((pokemon) => pokemon.id === id) > -1}
          >
            {myPokemons.findIndex((pokemon) => pokemon.id === id) > -1
              ? "Already Captured"
              : "Capture"}{" "}
            {name}
          </button>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
