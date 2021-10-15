export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

export const toggleFavorite = (pokemon) => ({
  type: TOGGLE_FAVOURITE,
  payload: pokemon,
});
