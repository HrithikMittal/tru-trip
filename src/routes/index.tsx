import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyPokemon from "../pages/my-pokemon";
import Pokemon from "../pages/pokemon";
import PokemonDetails from "../pages/pokemon-details";

const AllRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Pokemon />} />
          <Route path="/my-pokemon" element={<MyPokemon />} />
          <Route path="/pokemon-details" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoutes;
