'use client'

import {  IoHeartCircleOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";

export const PokemonFavorite = () => {
  const pokemonsDefault = useAppSelector(state => Object.values(state.pokemon.favorites))

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemonsDefault.length ?  <PokemonGrid pokemons={pokemonsDefault} /> : <NoFavorites/> 
        }
       
      </div>
    </div>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartCircleOutline size={100} className="text-red-500"/>
      <span>No hay favoritos</span>
    </div>
  )
}
