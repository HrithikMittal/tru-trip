import axios from "axios";
import { API_URL } from "../config";

export const getPokemons = async (query: string) => {
  const url = `${API_URL}?${query}`;
  const response = await axios.get(url);
  return response.data;
};

export const getPokemonDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
};
