import React, { useEffect, useCallback } from "react";
import { getPokemons } from "../../utils/apis";
import { IPokemon } from "../../utils/types";
import { useInfiniteQuery } from "react-query";
import { useState } from "react";
import SinglePokemon from "../../components/single-pokemon";
import { getStyles } from "./style";

const Pokemon = () => {
  const classes = getStyles();

  const [data, setData] = useState<IPokemon[]>([]);

  const { hasNextPage, fetchNextPage } = useInfiniteQuery(
    "pokemons",
    async ({ pageParam = 1 }) => {
      const pokemons = await getPokemons(pageParam);
      return pokemons;
    },
    {
      onSuccess: (data) => {
        const _data: IPokemon[] = [];
        data.pages.forEach((page) => {
          page.results.forEach((pokemon: IPokemon) => {
            _data.push(pokemon);
          });
        });
        setData(_data);
      },
      getNextPageParam: (lastPage) => {
        const queryString = lastPage.next.split("?")[1];
        return queryString;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 3,
    }
  );

  const isScrolling = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    if (hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [isScrolling]);

  return (
    <>
      <div className={classes.title}>Pokemons</div>
      <div className={classes.list}>
        {data.map((pokemon: IPokemon, index: number) => {
          return <SinglePokemon key={index} {...pokemon} />;
        })}
      </div>
    </>
  );
};

export default Pokemon;
