import axios from 'axios';

const getDescriptionPokemon = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`,
});

export default getDescriptionPokemon;
