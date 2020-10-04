import { SEARCH_FILM_REQUEST } from '../types';

export const searchFilmById = (id) => ({
  type: SEARCH_FILM_REQUEST,
  payload: id,
});
