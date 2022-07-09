import React from "react";
import { useNavigate } from "react-router-dom";
import { IPokemon } from "@src/utils/types";
import { getStyles } from "./style";
import { IMAGE_URL } from "../../config";

const SinglePokemon = (props: IPokemon) => {
  const { name, url } = props;

  const history = useNavigate();

  const handleClick = () => {
    history(
      `/pokemon-details/${url.split("/")[url.split("/").length - 2]}/${name}`
    );
  };

  const classes = getStyles();
  return (
    <div className={classes.container} onClick={handleClick}>
      <img
        src={`${IMAGE_URL}${url.split("/")[url.split("/").length - 2]}.png`}
        alt={name}
        width="50px"
      />
      {name}
    </div>
  );
};

export default SinglePokemon;
