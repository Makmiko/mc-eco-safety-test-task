import { call, put } from 'redux-saga/effects';
import { SEARCH_FILMS_ERROR, SEARCH_FILMS_REQUEST, SEARCH_FILMS_SUCCESS } from '../types';
import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

export function *searchFilmsWatcher() {
  yield takeLatest(SEARCH_FILMS_REQUEST, searchFilms)
}

export function* searchFilms(action) {
  try {
    const { searchParam, page = 1 } = action.payload;
    if (!searchParam) return;
    const data = yield call(searchFilmsRequest, { searchParam, page } );
    if (data && data.Response === 'True') {
      yield put({
        type: SEARCH_FILMS_SUCCESS,
        payload: data,
      });
    } else {
      yield put({
        type: SEARCH_FILMS_ERROR,
        payload: data,
      });
    }
  } catch (e) {
    console.log('error occurred while fetching films: ', e);
    yield put({
      type: SEARCH_FILMS_ERROR,
      payload: {
          Error: e.message,
          Search: [],
          Request: false,
      }
    })
  }
}

async function searchFilmsRequest({ searchParam, page = 1 }) {
  const query = (
    `https://www.omdbapi.com/?apikey=${process.env.APP_TOKEN}&s=${searchParam}&page=${page}`);
  const response = await axios.get(query);
  return response.data;
}
