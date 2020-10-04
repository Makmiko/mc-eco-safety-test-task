import {
  CLEAR_FILM_LIST,
  SEARCH_AUTOCOMPLETE_FILMS_ERROR,
  SEARCH_AUTOCOMPLETE_FILMS_SUCCESS,
  SEARCH_FILMS_ERROR,
  SEARCH_FILMS_SUCCESS
} from '../types';

const initialState = {
  films: [],
  searchFilms: {},
  searchAutocompleteFilms: {},
  searchFilm: {},
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FILMS_SUCCESS:
      return {
        ...state,
        searchFilms: action.payload
      };
    case SEARCH_FILMS_ERROR:
      return {
        ...state,
        searchFilms: {...action.payload, Search: [] }
      };
    case CLEAR_FILM_LIST:
      return {
        ...state,
        searchFilms: {}
      };
    case SEARCH_AUTOCOMPLETE_FILMS_SUCCESS:
      return {
        ...state,
        searchAutocompleteFilms: action.payload
      };
    case SEARCH_AUTOCOMPLETE_FILMS_ERROR:
      return {
        ...state,
        searchAutocompleteFilms: {...action.payload, Search: [] }
      };
    default:
      return state;
  }
};
