import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action)
        console.log(action.type)
        if(action.type === "pokemon/toggleFavorite"){
            const { pokemon } = state.getState() as RootState
            localStorage.setItem("favorite-pokemons", JSON.stringify(pokemon.favorites))
        }
        console.log(state.getState())
    }
}