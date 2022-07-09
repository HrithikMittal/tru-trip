import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IPokemon } from "@src/utils/types";
import { getStyles } from "./style";
import { IMAGE_URL } from "../../config";
import { IState } from "@src/context/types";
import PokemonContext from "../../context/context";

const SinglePokemon = (props: IPokemon | IState) => {
  const { name, url, id, isRemove, nickName } = props;
  const history = useNavigate();
  const { removePokemon } = useContext(PokemonContext);

  const handleClick = () => {
    if (id) {
      history(`/pokemon-details/${id}/${name}`);
    } else {
      history(
        `/pokemon-details/${url.split("/")[url.split("/").length - 2]}/${name}`
      );
    }
  };

  const handleRemove = () => {
    removePokemon({
      id: id || "",
      name: name || "",
      nickName: "",
      url: "",
    });
  };

  const classes = getStyles();
  return (
    <div className={classes.container} data-testid={"list-container"}>
      <div
        className={classes.img}
        onClick={handleClick}
        data-testid={"list-container-click"}
      >
        <img
          src={
            id
              ? `${IMAGE_URL}${id}.png`
              : `${IMAGE_URL}${url.split("/")[url.split("/").length - 2]}.png`
          }
          alt={name}
          width="50px"
        />
        {name} {nickName ? "- " + nickName : ""}
      </div>
      {isRemove && (
        <div className={classes.removeBtn} onClick={handleRemove}>
          Remove
        </div>
      )}
    </div>
  );
};

export default SinglePokemon;
