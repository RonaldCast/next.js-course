
"use client"
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonSlice";
interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector( state => !!state.pokemon.favorites[id])
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleFavorite(pokemon))
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            height={100}
            width={100}
            alt={pokemon.name}
            priority={false}
          />

          <p className="text-sm text-gray-100 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${pokemon.name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
           onClick={toggle}
            className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
          >
            <div className="text-red-600 flex items-center">
              {isFavorite ?  ( <IoHeart/>)  : ( <IoHeartOutline />) }
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                { isFavorite ? "Es Favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">Click para poner como favorito</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
