import { SEARCH_FILM_ERROR, SEARCH_FILM_SUCCESS } from '../types';

const initialState = {
  film: {},
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FILM_SUCCESS:
      return {
        ...state,
        film: action.payload,
      };
    case SEARCH_FILM_ERROR:
      return {
        ...state,
        film: action.payload,
      };
    default:
      return state
  }
};
