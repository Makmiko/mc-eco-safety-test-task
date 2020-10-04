import { CLEAR_FILM_LIST, SEARCH_AUTOCOMPLETE_FILMS_REQUEST, SEARCH_FILMS_REQUEST } from '../types';

export const searchFilms = (searchParam, page = 1) => ({
  type: SEARCH_FILMS_REQUEST,
  payload: {
    searchParam,
    page,
  },
});

export const clearFilmList = () => ({
  type: CLEAR_FILM_LIST,
});

export const searchAutocompleteFilms = (searchParam, page = 1) => ({
  type: SEARCH_AUTOCOMPLETE_FILMS_REQUEST,
  payload: {
    searchParam,
    page,
  },
});
