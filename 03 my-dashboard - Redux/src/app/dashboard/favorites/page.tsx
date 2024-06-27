// import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/";

import { PokemonFavorite, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
    title: "favorite", 
    description: 'Ad  minim sit '
}

export default async function PokemonPage() {

  return (
    <>
      <span className="text-3xl">
        Pokemons Favoritos <small>Global starte </small>
      </span>

      <PokemonFavorite/>
    
     
    </>
  );
}



