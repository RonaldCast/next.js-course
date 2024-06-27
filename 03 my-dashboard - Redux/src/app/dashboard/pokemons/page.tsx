// import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/";

import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  // throw Error("Este error no debio de suceder")
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonPage() {
  const data = await getPokemons(151);

  return (
    <>
      <span className="text-3xl">
        Listados de Pokémons <small className="text-blue">estática</small>
      </span>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <PokemonGrid pokemons={data} />
        </div>
      </div>
    </>
  );
}
