import { TOGGLE_FAVOURITE } from "./actions";

const INITIAL_STATE = {
  favorites: [],
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch ((action, type)) {
    case TOGGLE_FAVOURITE:
      let pokemonFromFavorite = state.favorites.find(
        (favPokemon) => action.payload.id === favPokemon.id
      );
      return {
        ...state,
        favorites: pokemonFromFavorite
          ? [
              ...state.favorites.filter(
                (pokemon) => pokemon.id !== pokemonFromFavorite.id
              ),
            ]
          : [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

export default pokemonReducer;
