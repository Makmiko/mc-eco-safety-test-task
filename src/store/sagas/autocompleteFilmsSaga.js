import { call, put } from 'redux-saga/effects';
import {
  SEARCH_AUTOCOMPLETE_FILMS_REQUEST,
  SEARCH_AUTOCOMPLETE_FILMS_SUCCESS,
  SEARCH_AUTOCOMPLETE_FILMS_ERROR
} from '../types';
import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

export function *searchAutocompleteFilmsWatcher() {
  yield takeLatest(SEARCH_AUTOCOMPLETE_FILMS_REQUEST, searchAutocompleteFilms)
}

export function* searchAutocompleteFilms(action) {
  try {
    const { searchParam, page = 1 } = action.payload;
    if (!searchParam) return;
    const data = yield call(searchAutocompleteFilmsRequest, { searchParam, page } );
    if (data && data.Response === 'True') {
      yield put({
        type: SEARCH_AUTOCOMPLETE_FILMS_SUCCESS,
        payload: data,
      });
    } else {
      yield put({
        type: SEARCH_AUTOCOMPLETE_FILMS_ERROR,
        payload: data,
      });
    }
  } catch (e) {
    console.log('error occurred while fetching films autocomplete: ', e.message);
    yield put({
      type: SEARCH_AUTOCOMPLETE_FILMS_ERROR,
      payload: {
        Error: e.message,
        Search: [],
        Request: false,
      }
    })
  }
}

async function searchAutocompleteFilmsRequest({ searchParam, page = 1 }) {
  const query = (
    `https://www.omdbapi.com/?apikey=${process.env.APP_TOKEN}&s=${searchParam}&page=${page}`);
  const response = await axios.get(query);
  return response.data;
}
