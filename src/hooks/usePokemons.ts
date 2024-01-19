import {  useState, useEffect } from "react";
import { IndexedPokemon, ListPokemon, PokemonListResponse } from "../interface";
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL } from "../PokeApi";
import { getClient } from "../api";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<ListPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL);


  const IndexedPokemonToListPokemon = (IndexedPokemon: IndexedPokemon) => {
    const pokedexNumber = parseInt (IndexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`,"")
    .replace("/", ""));

    const listPokemon: ListPokemon = {
      name: IndexedPokemon.name,
      url: IndexedPokemon.url,
      image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
      pokedexNumber,
    };

    return listPokemon;
  };

  const fetchPokemon = async () => {
    if (nextUrl) {
      const result = await getClient.get<PokemonListResponse>(nextUrl);
      console.log(result);
      if (result?.data?.results) {
        const listPokemons = result.data.results.map ( (p) => IndexedPokemonToListPokemon(p));
        setPokemons([...pokemons, ...listPokemons]);
        setNextUrl(result.data.next)
      }
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return {
    pokemons,
    fetchNextPage: fetchPokemon, 
    hasMorePokemon: !! nextUrl
  };
};

export default usePokemons;

