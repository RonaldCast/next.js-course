import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonState {
    favorites: {[key: string]: SimplePokemon}
}

const getInitialState = (): PokemonState => {
  const favorites = JSON.parse(localStorage?.getItem('favorite-pokemons') ?? "{}")
  return favorites
}

const initialState: PokemonState = {
  favorites:{}
  // ...getInitialState()
    // "1": {id: "1", name:"bulbasur"},
    // "3": {id: "3", name:"Venusaur"}
}


const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>){
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pokemon = action.payload;
      const { id } = pokemon; 

      if( !!state.favorites[id]) {
          delete state.favorites[id]
      }else{

        state.favorites[id] = pokemon
      }

      // localStorage.setItem("favorite-pokemons", JSON.stringify(state))
    }
  }
});

export const {toggleFavorite, setFavoritePokemons} = pokemonSlice.actions

export default pokemonSlice.reducer