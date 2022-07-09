import axios from "axios";
import { API_URL } from "../config";

export const getPokemons = async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
};

export const getPokemonDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
